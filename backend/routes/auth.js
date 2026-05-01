const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user');

// POST /auth/register — self-registration with password
router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'name, email, and password are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 8 characters' });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existing = await User.findOne({ email: normalizedEmail });
    if (existing) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      active: true,
    });

    const token = jwt.sign(
      { sub: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.status(201).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        active: user.active,
        createdAt: user.createdAt,
        avatarUrl: user.avatarUrl
      },
    });
  } catch (err) {
    next(err);
  }
});

// POST /auth/login — authenticate and receive a JWT
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'email and password are required' });
    }

    console.log('Attempting login for email:', email);
    const user = await User.findOne({ email }).select('+password');
        console.log('Comparing password for user:', user);

    if (!user || !user.active) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { sub: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        active: user.active,
        avatarUrl: user.avatarUrl
      },
    });
  } catch (err) {
    next(err);
  }
});


// Validatate Invitation Token for user to set their password and activate their account, given token only as a queryparam.
// validate-invitation?token=xxx
router.get('/validate-invitation', async (req, res, next) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ message: 'Invitation token is required' });
    }
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await User.findOne({ invitationToken: hashedToken });
    if (!user) {
      return res.status(400).json({ message: 'Invalid invitation token' });
    }
    res.json({ valid: true, email: user.email, name: user.name });
  } catch (err) {
    next(err);
  }
});


// POST /auth/set-password — set password and activate account using invitation token, and new password in body
router.post('/set-password', async (req, res, next) => {
  try {
    const { token, password } = req.body;
    if (!token || !password) {
      return res.status(400).json({ message: 'Invitation token and new password are required' });
    } 
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 8 characters' });
    }
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await User.findOne({ invitationToken: hashedToken });
    if (!user) {
      return res.status(400).json({ message: 'Invalid invitation token' });
    }
    user.password = await bcrypt.hash(password, 12);
    user.active = true;
    user.invitationToken = undefined;
    await user.save();
    
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

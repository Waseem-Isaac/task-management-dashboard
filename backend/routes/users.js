// User Routes
const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const User = require('../models/user');
const { sendInvitationEmail } = require('../config/mailer');

// GET all users (optionally filter by ?active=true)
router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.active === 'true') filter.active = true;
    const users = await User.find(filter);
    res.json({ users, meta: { totalCount: users.length } });
  } catch (err) {
    next(err);
  }
});

// POST create a new user (admin — no password, active: false by default)
router.post('/', async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const normalizedEmail = email.trim().toLowerCase();

    const existing = await User.findOne({ email: normalizedEmail });
    if (existing) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    // Generate a secure random invitation token (plain sent via email, hash stored in DB)
    const plainToken  = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(plainToken).digest('hex');

    const user = await User.create({
      name,
      email: normalizedEmail,
      invitationToken: hashedToken,
      role: 'MEMBER' // for invited users
    });

    // Send invitation email with the plain token
    await sendInvitationEmail(normalizedEmail, plainToken);

    res.status(201).json(user);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Email already in use' });
    }
    next(err);
  }
});

// GET a specific user by ID
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// DELETE a specific user by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});


// Update current user's profile
router.put('/me', async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
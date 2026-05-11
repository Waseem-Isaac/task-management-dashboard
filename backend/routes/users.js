// User Routes
const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const User = require('../models/user');
const { sendInvitationEmail } = require('../config/mailer');
const TransferRequest = require('../models/transfer-request');

// GET all users (optionally filter by ?active=true)
// Pagination: ?page=1&limit=20
router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.active === 'true') filter.active = true;

    const page  = Math.max(1, parseInt(req.query.page,  10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));
    const skip  = (page - 1) * limit;

    const [users, totalCount] = await Promise.all([
      User.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }).populate('managedBy', '_id name email avatarUrl'),
      User.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      users,
      meta: {
        totalCount,
        totalPages,
        page,
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (err) {
    next(err);
  }
});

// Get current user team members
router.get('/me/team', async (req, res, next) => {
   try {
    let filter = {};

    if(req.user.role === 'TEAM_LEAD') {
      /** get users who are either myself or my team members */
      filter = { $or: [{ _id: req.user._id} ,{ managedBy: req.user._id  }] };
    }else {
      /** get users who are either my siblings, my lead, or myself */
      // but handle the case when the user has no lead (managedBy is null) - then just return myself
      if (!req.user.managedBy) {
        filter = { _id: req.user._id };
      } else {
        filter = { $or: [{ managedBy: req.user.managedBy }, { _id: req.user.managedBy }, { _id: req.user._id }] };
      }
    }

      
    if (req.query.active === 'true') filter.active = true;

    const page  = Math.max(1, parseInt(req.query.page,  10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));
    const skip  = (page - 1) * limit;

    const [users, totalCount] = await Promise.all([
      User.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }).populate('managedBy', '_id name email avatarUrl'),
      User.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      users,
      meta: {
        totalCount,
        totalPages,
        page,
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
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
      role: 'MEMBER', // for invited users
      managedBy: req.user._id  // ← automatically set to the inviting lead
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
    const user = await User.findById(req.params.id).populate('managedBy', '_id name email avatarUrl');
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

    // cascade — remove all transfer requests involving this user
    await TransferRequest.deleteMany({
      $or: [
        { member:   req.params.id },
        { fromLead: req.params.id },
        { toLead:   req.params.id },
      ]
    });
    // also set managedBy to null for any users managed by the deleted user
    await User.updateMany({ managedBy: req.params.id }, { $set: { managedBy: null } });

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
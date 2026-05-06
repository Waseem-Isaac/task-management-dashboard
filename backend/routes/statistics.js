// Statistics routes
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// GET all statistics
router.get('/', async (req, res, next) => {
  try {
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0]; // "YYYY-MM-DD"

    // Only filter by boardId when a valid ObjectId string is provided
    const boardId = req.query.boardId && req.query.boardId !== 'null'
      ? req.query.boardId
      : null;

    let total = 0, completed = 0, inProgress = 0, overdue = 0;

    if (boardId) {
      [total, completed, inProgress, overdue] = await Promise.all([
        Task.countDocuments({ boardId }),
        Task.countDocuments({ boardId, status: 'done' }),
        Task.countDocuments({ boardId, status: 'in_progress' }),
        Task.countDocuments({ boardId, dueDate: { $lt: todayStr }, status: { $ne: 'done' } }),
      ]);
    }

    const statistics = [
      {
        type: 'total',
        title: 'Total Tasks',
        value: total,
        color: '#1976D2',
      },
      {
        type: 'done',
        title: 'Completed',
        value: completed,
        color: '#388E3C',
      },
      {
        type: 'in_progress',
        title: 'In Progress',
        value: inProgress,
        color: '#FF6F00',
      },
      {
        type: 'overdue',
        title: 'Overdue',
        value: overdue,
        color: '#D32F2F',
      },
    ];

    res.json({ statistics, lastUpdated: now.toISOString() });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

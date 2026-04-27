// Statistics routes
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

function formatChange(current, previous, invert = false) {
  const diff = current - previous;
  if (diff === 0) return { change: '0', changeType: 'neutral' };
  const isUp = diff > 0;
  return {
    change: isUp ? `+${diff}` : `${diff}`,
    changeType: (isUp !== invert) ? 'positive' : 'negative',
  };
}

// GET all statistics
router.get('/', async (req, res, next) => {
  try {
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0]; // "YYYY-MM-DD"
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const [total, completed, inProgress, overdue,
           totalYest, completedYest, inProgressYest, overdueYest] = await Promise.all([
      Task.countDocuments({}),
      Task.countDocuments({ status: 'done' }),
      Task.countDocuments({ status: 'in_progress' }),
      Task.countDocuments({ status: { $ne: 'done' }, dueDate: { $lt: todayStr } }),

      Task.countDocuments({ createdAt: { $lt: startOfToday } }),
      Task.countDocuments({ status: 'done',        createdAt: { $lt: startOfToday } }),
      Task.countDocuments({ status: 'in_progress', createdAt: { $lt: startOfToday } }),
      Task.countDocuments({ status: { $ne: 'done' }, dueDate: { $lt: todayStr }, createdAt: { $lt: startOfToday } }),
    ]);

    const statistics = [
      {
        type: 'total',
        title: 'Total Tasks',
        value: total,
        ...formatChange(total, totalYest),
        changeLabel: 'since yesterday',
        color: '#1976D2',
      },
      {
        type: 'completed',
        title: 'Completed',
        value: completed,
        ...formatChange(completed, completedYest),
        changeLabel: 'since yesterday',
        color: '#388E3C',
      },
      {
        type: 'in-progress',
        title: 'In Progress',
        value: inProgress,
        ...formatChange(inProgress, inProgressYest),
        changeLabel: 'since yesterday',
        color: '#FF6F00',
      },
      {
        type: 'overdue',
        title: 'Overdue',
        value: overdue,
        ...formatChange(overdue, overdueYest, true), // invert: more overdue = negative
        changeLabel: 'since yesterday',
        color: '#D32F2F',
      },
    ];

    res.json({ statistics, lastUpdated: now.toISOString() });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

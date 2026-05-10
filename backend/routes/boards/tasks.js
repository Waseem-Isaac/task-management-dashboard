const express = require('express');
const router = express.Router({ mergeParams: true }); // ← mergeParams to access :boardId from parent route
const { Task, TaskHistory } = require('../../models/task');

// GET all tasks — scoped to board
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.find({ boardId: req.params.boardId }) // ← filter by board
      .populate({ path: 'assignee reporter', select: '_id name email' });
    const lastUpdated = tasks.length ? new Date(Math.max(...tasks.map(t => new Date(t.updatedAt)))) : null;
    res.json({ tasks, meta: { totalCount: tasks.length, lastUpdated } });
  } catch (err) {
    next(err);
  }
});

// POST create a new task — boardId from URL
router.post('/', async (req, res, next) => {
  try {
    const task = await (
      await Task.create({ ...req.body, boardId: req.params.boardId }) // ← boardId from URL, not body
    ).populate({ path: 'assignee reporter', select: '_id name email' });
    res.status(201).json(task);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    next(err);
  }
});

// GET a specific task by ID — verify it belongs to this board
router.get('/:id', async (req, res, next) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, boardId: req.params.boardId }) // ← scoped
      .populate({ path: 'assignee reporter', select: '_id name email' });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// PUT update a specific task — verify it belongs to this board
router.put('/:id', async (req, res, next) => {
  try {
    const oldTask = await Task.findOne({ _id: req.params.id, boardId: req.params.boardId })
      .populate({ path: 'assignee', select: '_id name' });
    if (!oldTask) return res.status(404).json({ error: 'Task not found' });

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, boardId: req.params.boardId }, // ← scoped
      req.body,
      { new: true, runValidators: true }
    ).populate({ path: 'assignee reporter', select: '_id name email' });

    // Log history for tracked field changes
    // For now we only track status, priority, and assignee changes
    const historyEntries = [];

    if (req.body.status !== undefined && req.body.status !== oldTask.status) {
      historyEntries.push({ taskId: task._id, type: 'status_change', oldValue: oldTask.status, newValue: req.body.status, user: req.user._id });
    }

    if (req.body.priority !== undefined && req.body.priority !== oldTask.priority) {
      historyEntries.push({ taskId: task._id, type: 'priority_change', oldValue: oldTask.priority, newValue: req.body.priority, user: req.user._id });
    }

    if (req.body.assignee !== undefined) {
      const oldAssigneeId = oldTask.assignee ? oldTask.assignee._id.toString() : '';
      const newAssigneeId = req.body.assignee ? req.body.assignee.toString() : '';
      if (oldAssigneeId !== newAssigneeId) {
        const oldValue = oldTask.assignee ? oldTask.assignee.name : 'unassigned';
        const newValue = task.assignee ? task.assignee.name : 'unassigned';
        historyEntries.push({ taskId: task._id, type: 'assignee_change', oldValue, newValue, user: req.user._id });
      }
    }

    if (historyEntries.length > 0) {
      await TaskHistory.insertMany(historyEntries);
    }

    res.json(task);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    next(err);
  }
});

// DELETE a specific task — verify it belongs to this board
router.delete('/:id', async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete(
      { _id: req.params.id, boardId: req.params.boardId } // ← scoped
    ).populate({ path: 'assignee reporter', select: '_id name email' });
    if (!task) return res.status(404).json({ error: 'Task not found.' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
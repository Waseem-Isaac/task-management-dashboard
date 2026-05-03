const express = require('express');
const router = express.Router({ mergeParams: true }); // ← mergeParams to access :boardId from parent route
const Task = require('../../models/task');

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
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, boardId: req.params.boardId }, // ← scoped
      req.body,
      { new: true, runValidators: true }
    ).populate({ path: 'assignee reporter', select: '_id name email' });
    if (!task) return res.status(404).json({ error: 'Task not found' });
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
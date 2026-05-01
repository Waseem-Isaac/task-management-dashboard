const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// GET all tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.find().populate({path: 'assignee reporter', select: '_id name email' });
    const lastUpdated = tasks.length ? new Date(Math.max(...tasks.map(t => new Date(t.updatedAt)))) : null;
    res.json({ tasks , meta : { totalCount: tasks.length, lastUpdated } });
  } catch (err) {
    next(err);
  }
});

// POST create a new task
router.post('/', async (req, res, next) => {
  try {
    const task = await (await Task.create(req.body)).populate({path: 'assignee reporter', select: '_id name email' });
    res.status(201).json(task);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    next(err);
  }
});

// GET a specific task by ID
router.get('/:id', async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id).populate({path: 'assignee reporter', select: '_id name email' });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// PUT update a specific task by ID
router.put('/:id', async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate({path: 'assignee reporter', select: '_id name email' });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    next(err);
  }
});

// DELETE a specific task by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id).populate({path: 'assignee reporter', select: '_id name email' });
    if (!task) return res.status(404).json({ error: 'Task not found.' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// Boards routes
const express = require('express');
const router = express.Router();
const Board = require('../../models/board');
const TaskRouter = require('./tasks');
const Task = require('../../models/task');

/**
 * Routes for boards:
GET     /boards                        → all boards
POST    /boards                        → create board
GET     /boards/:boardId               → single board
PUT     /boards/:boardId               → update board
DELETE  /boards/:boardId               → delete board

GET     /boards/:boardId/tasks         → all tasks in a board
POST    /boards/:boardId/tasks         → create task in a board
PUT     /boards/:boardId/tasks/:taskId → update task
DELETE  /boards/:boardId/tasks/:taskId → delete task
 */

// Get all boards
router.get('/', async (req, res) => {
  try {
    let boards;

    if (req.user.role === 'TEAM_LEAD') {
      // Team Lead — sees all boards he created, created by him or in case of he has tasks assigned
      const boardIds = await Task.distinct('boardId', { assignee: req.user._id });
      boards = await Board.find({ $or: [{ createdBy: req.user._id }, { _id: { $in: boardIds } }] }).sort({ createdAt: -1 });

    } else {
      // Team Member — sees only boards where they have at least one task
      const boardIds = await Task.distinct('boardId', { assignee: req.user._id });
      boards = await Board.find({ _id: { $in: boardIds } }).sort({ createdAt: -1 });
    }

    res.json({ boards, meta: { totalCount: boards.length } });

  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch boards' });
  }
});

// Create a new board 
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Board name is required' });
    const board = new Board({ name, createdBy: req.user._id });
    await board.save();
    res.status(201).json(board);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create board' });
  }
});

// Get a single board by ID
router.get('/:boardId', async (req, res) => {
  try {
    const board = await Board.findOne({ _id: req.params.boardId, createdBy: req.user._id });
    if (!board) return res.status(404).json({ error: 'Board not found' });
    res.json(board);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch board' });
  }
});

// Update a board by ID
router.put('/:boardId', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Board name is required' });
    const board = await Board.findOneAndUpdate(
      { _id: req.params.boardId, createdBy: req.user._id },
      { name },
      { new: true }
    );
    if (!board) return res.status(404).json({ error: 'Board not found' });
    res.json(board);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update board' });
  }
});

// Delete a board by ID
router.delete('/:boardId', async (req, res) => {
  try {
    const board = await Board.findOneAndDelete({ _id: req.params.boardId, createdBy: req.user._id });
    if (!board) return res.status(404).json({ error: 'Board not found' });

    // Delete all tasks belonging to this board
    await Task.deleteMany({ boardId: req.params.boardId });

    res.json({ message: 'Board deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete board' });
  }
});

// Board tasks routes are handled in tasks.js to keep this file focused on board operations
// Nested routes for tasks under a specific board
router.use('/:boardId/tasks', TaskRouter); // delegates task routes to tasks.js

module.exports = router;
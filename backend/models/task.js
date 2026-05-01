const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title:       { type: String, required: true, trim: true },
    description: { type: String, required: true, default: '' },
    status:      { type: String, required: true, enum: ['todo', 'in_progress', 'done'], default: 'todo' },
    priority:    { type: String, required: true, enum: ['low', 'medium', 'high'], default: 'medium' },
    dueDate:     { type: String, required: true, default: '' },
    assignee:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null , select: '_id name email' },
    reporter:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, select: '_id name email' },
    tags:        { type: [String], default: [] },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

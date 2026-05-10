const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    referenceId: { type: String, unique: true, trim: true },
    title:       { type: String, required: true, trim: true },
    description: { type: String, required: true, default: '' },
    status:      { type: String, required: true, enum: ['todo', 'in_progress', 'done'], default: 'todo' },
    priority:    { type: String, required: true, enum: ['low', 'medium', 'high'], default: 'medium' },
    dueDate:     { type: String, required: true, default: '' },
    assignee:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null , select: '_id name email' },
    reporter:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, select: '_id name email' },
    tags:        { type: [String], default: [] },

    boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true }
  },
  { timestamps: true }
);

taskSchema.pre('validate', async function () {
  if (this.isNew && !this.referenceId) {
    const prefix = 'BO-';
    const last = await mongoose.model('Task').findOne(
      { referenceId: new RegExp(`^${prefix}\\d{4}$`) },
      { referenceId: 1 },
      { sort: { referenceId: -1 } }
    );
    const nextNum = last ? parseInt(last.referenceId.replace(prefix, ''), 10) + 1 : 1;
    this.referenceId = `${prefix}${String(nextNum).padStart(4, '0')}`;
  }
});

const taskHistorySchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  // For now we only track status, priority, and assignee changes
  type: { type: String, required: true, enum: ['status_change', 'priority_change', 'assignee_change'] },
  oldValue: { type: String, required: true },
  newValue: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);
const TaskHistory = mongoose.model('TaskHistory', taskHistorySchema);

module.exports = { Task, TaskHistory };

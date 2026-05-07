/** Analytics routes */
const express = require('express');
const router = express.Router({ mergeParams: true }); // ← mergeParams to access :boardId from parent route
const mongoose = require('mongoose');
const crypto = require('crypto');
const Task = require('../../models/task');

/**
 * All analytics except Activity are just aggregations on your existing Task data — no new model, just a dedicated route
 * 
 * GET /boards/:boardId/analytics
 *   1. statusChart data for tasks per status (done, in_progress, overdue) and priority (low, medium, high)
 *     object to be returned : 
 *      // enum statuses = ['todo', 'in_progress', 'done']
 *     {
 *        labels: ['To Do', 'In Progress', 'Done'], 
 *        datasets: [
 *            {label: 'Low', data: statuses.map((s) => count(s, 'low')) },
 *            {label: 'Medium', data: statuses.map((s) => count(s, 'medium'))},
 *            {label: 'High', data: statuses.map((s) => count(s, 'high'))}
 *        ]
 *      }
 * 
 *  2. Completion Rate: Calculate from task counts
 *     object to be returned :
 *     {
 *        completionRate: (number of done tasks / total tasks) * 100,
 *        doneCount: number of done tasks,
 *        todoCount: number of todo tasks,
 *        inProgressCount: number of in_progress tasks,
 *        overdueCount: number of overdue tasks
 *     }
 * 
 *  3. Priority Breakdown: barChart data : group tasks by priority field and count. One aggregation query: Task.aggregate([{ $group: { _id: '$priority', count: { $sum: 1 } } }])
 *      Task.aggregate() group by priority
 *      object to be returned :
 *      {
 *        labels: ['Low', 'Medium', 'High'],
 *       datasets: [
 *          {label: 'Tasks', data: [lowCount, mediumCount, highCount]}
 *      ]
 *     }
 * 
 * 4. Tasks per Member:  group tasks by assignee, show who has the most load. Same aggregation pattern, join with user names
 *      Task.aggregate() group by assignee
  *     object to be returned :
  *   { 
  *     tasksPerMember: [
  *       { name: 'Alice', avatar: 'alice.jpg', taskCount: 5},
  *       { name: 'Bob', avatar: 'bob.jpg', taskCount: 3 },
  *       ...
  *     ]
  *   }
  * 
  * 5. Activity Feed: separate endpoint, GET /boards/:boardId/analytics/activity
  *    - return recent activity logs (task created, updated, completed) with timestamps and user info. This would require a new Activity model to log actions as they happen.
  *   object to be returned :
  *  {
  *   activity: [
  *    { type: 'created', taskId: '123', user: { name: 'Alice', avatar: 'alice.jpg' }, timestamp: '2024-01-01T12:00:00Z' },
  *    { type: 'updated', taskId: '124', user: { name: 'Bob', avatar: 'bob.jpg' }, timestamp: '2024-01-02T12:00:00Z' },
  *    { type: 'completed', taskId: '125', user: { name: 'Charlie', avatar: 'charlie.jpg' }, timestamp: '2024-01-03T12:00:00Z' }
  *   ]
  *  }
  * 
  * So total response object will be like : 
  * {
  *   statusChartData: { ... },
  *   completionRate: { ... },
  *   priorityBreakdownChartData: { ... },
  *   tasksPerMember: { ... },
  *   activity: { ... }
  * }
 * 
 * Note: For the activity feed, you would need to implement an Activity model and log actions whenever tasks are created, updated, or completed. This is a bit more complex and may require middleware to capture these events.
 * 
 * For the other analytics, you can calculate them on the fly using aggregation queries on the Task collection filtered by boardId.
  */

// GET /boards/:boardId/analytics,  GET analytics for a board
router.get('/', async (req, res, next) => {
  try {
    const boardId = req.params.boardId;
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0]; // "YYYY-MM-DD"
    const statuses = ['todo', 'in_progress', 'done'];

    // 1. Status Chart Data: tasks per status and priority
    const statusChartData = {
      labels: ['To Do', 'In Progress', 'Done'],
      datasets: [
        { label: 'Low', data: [] },
        { label: 'Medium', data: [] },
        { label: 'High', data: [] },
      ],
    };
    for (const status of statuses) {
      for (const priority of ['low', 'medium', 'high']) {
        const count = await Task.countDocuments({ boardId, status, priority });
        const dataset = statusChartData.datasets.find(d => d.label.toLowerCase() === priority);
        dataset.data.push(count);
      }
    }

    // 2. Completion Rate: Calculate from task counts
    const totalTasks = await Task.countDocuments({ boardId });
    const doneTasks = await Task.countDocuments({ boardId, status: 'done' });
    const inProgressTasks = await Task.countDocuments({ boardId, status: 'in_progress' });
    const todoTasks = await Task.countDocuments({ boardId, status: 'todo' });
    const overdueTasks = await Task.countDocuments({ boardId, dueDate: { $lt: todayStr }, status: { $ne: 'done' } });
    const completionRate = totalTasks > 0 ? (doneTasks / totalTasks) * 100 : 0;
    const completionRateData = { doneTasks, inProgressTasks, todoTasks, overdueTasks, completionRate };


    // 3. Priority Breakdown: DoughnutChart data : group tasks by priority field and count
    const priorityBreakdown = await Task.aggregate([
      { $match: { boardId: new mongoose.Types.ObjectId(boardId) } },
      { $group: { _id: '$priority', count: { $sum: 1 } } }
    ]);

    const priorityBreakdownChartData = {
      labels: ['Low', 'Medium', 'High'],
      datasets: [
        {
          label: 'Tasks',
          data: ['low', 'medium', 'high'].map(priority => {
            const item = priorityBreakdown.find(p => p._id === priority);
            return item ? item.count : 0;
          })
        }
      ]
    };

    // 4. Tasks per Member: group tasks by assignee, show who has the most load
    // This would require a lookup to the User collection to get names and avatars
    const tasksPerMemberAggregationData = await Task.aggregate([
      { $match: { boardId: new mongoose.Types.ObjectId(boardId) } },
      { $group: { _id: '$assignee', taskCount: { $sum: 1 } } },
      { $lookup: { from: 'users', localField: '_id', foreignField: '_id', as: 'assigneeInfo' } },
      { $unwind: '$assigneeInfo' },
      { $project: { _id: 0, name: '$assigneeInfo.name', email: '$assigneeInfo.email', taskCount: 1 } },
      { $sort: { taskCount: -1 } }
    ]);

    const tasksPerMember = tasksPerMemberAggregationData.map(m => {
      const hash = crypto.createHash('md5').update(m.email.trim()).digest('hex');
      const bgColor = hash.slice(0, 6);
      return {
        name: m.name,
        email: m.email,
        taskCount: m.taskCount,
        avatarUrl: `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(m.name)}&backgroundColor=${bgColor}&color=fff&size=200&scale=60`
      };
    });

    res.json({ totalTasks, statusChartData, completionRateData, priorityBreakdownChartData, tasksPerMember });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
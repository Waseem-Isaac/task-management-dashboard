/** Transfer Requests Routes */
const express = require('express');
const router = express.Router();
const TransferRequest = require('../models/transfer-request');
const User = require('../models/user');
const Task = require('../models/task');

/** Create a populate option so it can be re-used in the queries */
const populateOptions = [
  { path : 'member', select: '_id name email avatarUrl' },
  { path : 'fromLead', select: '_id name email avatarUrl' },
  { path : 'toLead', select: '_id name email avatarUrl' }
];

/** 
 * A transfer request is created by the new team lead to request transferring a member from their current team lead to themselves.
 * Routes are 
 *   POST / - Create a new transfer request (by the new team lead)
 *   GET / - Get all transfer requests for the current user (as member or lead)
 *   PUT /:id/approve - Approve a transfer request (by current team lead)
 *   PUT /:id/reject - Reject a transfer request (by current team lead)
 *   DELETE /:id - Cancel a pending transfer request (by new team lead) 
 * */

// Create a new transfer request
router.post('/', async (req, res) => {
 try {
    const { memberId } = req.body;
 
    const member = await User.findById(memberId);
    if (!member)                          return res.status(404).json({ message: 'User not found' });
    if (member.role !== 'MEMBER')         return res.status(400).json({ message: 'User is not a member' });
    if (!member.managedBy)                return res.status(400).json({ message: 'User has no current manager' });
    if (member.managedBy.equals(req.user._id)) return res.status(400).json({ message: 'User is already under your management' });
 

    const existingRequest = await TransferRequest.findOne({ member: memberId, toLead: req.user._id, status: 'PENDING' });
    if (existingRequest) return res.status(400).json({ message: 'A pending transfer request for this member already exists' });

    const transferRequest = new TransferRequest({
      member: memberId,
      fromLead: member.managedBy,
      toLead: req.user._id
    });
    await transferRequest.save();
    await transferRequest.populate(populateOptions);

    res.status(201).json(transferRequest);
 } catch (err) {
    next(err);
 }
});

// Get all transfer requests for the current user (as member or lead)
router.get('/', async (req, res, next) => {
  try {
    const page  = Math.max(1, parseInt(req.query.page)  || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
    const skip  = (page - 1) * limit;

    const query = {
      $or: [
        { member: req.user._id },   // requests involves me - as member
        { fromLead: req.user._id }, // requests made by me - as current lead
        { toLead: req.user._id }    // requests made to me - as new lead
      ]
    };

    const [transferRequests, totalCount] = await Promise.all([
      TransferRequest.find(query).populate(populateOptions).sort({ createdAt: -1 }).skip(skip).limit(limit),
      TransferRequest.countDocuments(query)
    ]);

    res.json({
      requests: transferRequests,
      meta: {
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        page,
        limit
      }
    });
  } catch (err) {
    next(err);
  }
});


/**
 * 
 * 
 * / PUT — approve (only fromLead can approve)
router.put('/:id/approve', async (req, res, next) => {
  try {
    const request = await TransferRequest.findOne({ _id: req.params.id, fromLead: req.user._id, status: 'PENDING' });
    if (!request) return res.status(404).json({ error: 'Request not found or not authorized' });
 
    // 1. transfer member to new lead
    await User.findByIdAndUpdate(request.member, { managedBy: request.toLead });
 
    // 2. unassign all their tasks
    await Task.updateMany({ assignee: request.member }, { $unset: { assignee: 1 } });
 
    // 3. mark approved
    request.status = 'APPROVED';
    await request.save();
 
    res.json(await request.populate(populate));
  } catch (err) {
    next(err);
  }
});
 
// PUT — reject (only fromLead can reject)
router.put('/:id/reject', async (req, res, next) => {
  try {
    const request = await TransferRequest.findOne({ _id: req.params.id, fromLead: req.user._id, status: 'PENDING' });
    if (!request) return res.status(404).json({ error: 'Request not found or not authorized' });
 
    request.status = 'REJECTED';
    await request.save();
 
    res.json(await request.populate(populate));
  } catch (err) {
    next(err);
  }
});
 
// DELETE — cancel a request (only toLead who created it can cancel, only if still pending)
router.delete('/:id', async (req, res, next) => {
  try {
    const request = await TransferRequest.findOneAndDelete({ _id: req.params.id, toLead: req.user._id, status: 'PENDING' });
    if (!request) return res.status(404).json({ error: 'Request not found or not authorized' });
 
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});
 * 
 */


module.exports = router;


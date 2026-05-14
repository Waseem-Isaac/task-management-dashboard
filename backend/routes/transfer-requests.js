/** Transfer Requests Routes */
const express = require('express');
const router = express.Router();
const TransferRequest = require('../models/transfer-request');
const User = require('../models/user');
const { Task } = require('../models/task');

/** Create a populate option so it can be re-used in the queries */
const populateOptions = [
  { path : 'member', select: '_id name email avatarUrl' },
  { path : 'fromLead', select: '_id name email avatarUrl' },
  { path : 'toLead', select: '_id name email avatarUrl' }
];

/** Shared helper — unassign all tasks belonging to a member */
async function unassignMemberTasks(memberId) {
  await Task.updateMany({ assignee: memberId }, { $unset: { assignee: 1 } });
}

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
router.post('/', async (req, res, next) => {
  try {
    const { memberId } = req.body;

    /** Validate member existence and role */
    const member = await User.findById(memberId);
    if (!member)                  return res.status(404).json({ message: 'User not found' });
    if (member.role !== 'MEMBER') return res.status(400).json({ message: 'User is not a member' });

    // Member is under no management — directly transfer him without creating a transfer request
    if (!member.managedBy) {
      member.managedBy = req.user._id;
      await member.save();
      await unassignMemberTasks(member._id);
      return res.json(await member.populate('managedBy', '_id name email avatarUrl'));
    }

    if (member.managedBy.equals(req.user._id))
      return res.status(400).json({ message: 'User is already under your management' });
    /** ================================== */

    /** Validate existing transfer request */
    const existingRequest = await TransferRequest.findOne({ member: memberId, toLead: req.user._id, status: 'PENDING' });
    if (existingRequest)
      return res.status(400).json({ message: 'A pending transfer request for this member already exists' });
    /** ================================== */

    /** Create a new transfer request */
    const transferRequest = new TransferRequest({
      member: memberId,
      fromLead: member.managedBy,
      toLead: req.user._id
    });
    await transferRequest.save();
    await transferRequest.populate(populateOptions);

    // mark the member as "pending transfer" - we can add a separate field like transferStatus
    member.transferStatus = 'PENDING_TRANSFER'; 
     await member.save();

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
    // as a lead , I need to allow filtering by if the request is an incoming request to me (toLead) or an outgoing request from me (fromLead)
    const filterType = req.query.filterType; // expected values: 'incoming', 'outgoing', or undefined for all
    let query;

    if (filterType === 'incoming') {
      query = { toLead: req.user._id };
    } else if (filterType === 'outgoing') {
      query = { fromLead: req.user._id };
    } else {
      query = {
        $or: [
          { member: req.user._id },   // requests involves me - as member
          { fromLead: req.user._id }, // requests made by me - as current lead
        { toLead: req.user._id },    // requests made to me - as new lead
        ]
      };
    }

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


// PUT — approve (only fromLead can approve)
router.put('/:id/approve', async (req, res, next) => {
  try {
    const request = await TransferRequest.findOne({ _id: req.params.id, fromLead: req.user._id, status: 'PENDING' });
    if (!request) return res.status(404).json({ message: 'Request not found or not authorized, maybe it has already been processed' });
 
    // 1. transfer member to new lead
    await User.findByIdAndUpdate(request.member?._id, { managedBy: request.toLead?._id, transferStatus: 'NONE' });
 
    // 2. unassign all their tasks
    await unassignMemberTasks(request.member?._id);
 
    // 3. mark approved
    request.status = 'APPROVED';
    await request.save();
    await request.populate(populateOptions);

    res.json(request);
  } catch (err) {
    next(err);
  }
});

// PUT — reject (only fromLead can reject)
router.put('/:id/reject', async (req, res, next) => {
  try {
    const request = await TransferRequest.findOne({ _id: req.params.id, fromLead: req.user._id, status: 'PENDING' });
    if (!request) return res.status(404).json({ message: 'Request not found or not authorized, maybe it has already been processed' });
 
    // just reset the member's transferStatus back to NONE - they are still under the same lead, just the transfer request is rejected
    await User.findByIdAndUpdate(request.member?._id, { transferStatus: 'NONE' });

    request.status = 'REJECTED';
    await request.save();
    await request.populate(populateOptions);

    res.json(request);
  } catch (err) {
    next(err);
  }
});
 

// DELETE — cancel a request (only toLead who created it can cancel, only if still pending)
router.delete('/:id', async (req, res, next) => {
  try {
    const request = await TransferRequest.findOneAndDelete({ _id: req.params.id, toLead: req.user._id, status: 'PENDING' });
    if (!request) return res.status(404).json({ message: 'Request not found or not authorized, maybe it has already been processed' });
 
    // reset the member's transferStatus back to NONE - they are still under the same lead, just the transfer request is cancelled
    await User.findByIdAndUpdate(request.member?._id, { transferStatus: 'NONE' });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});


module.exports = router;


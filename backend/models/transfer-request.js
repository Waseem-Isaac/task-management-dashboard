/** Transfer Request Model */
const mongoose = require('mongoose');

const transferRequestSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // the member being transferred
  fromLead: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // current team lead
  toLead: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // new team lead
  status: { type: String, enum: ['PENDING', 'APPROVED', 'REJECTED'], default: 'PENDING' },
}, { timestamps: true });

module.exports = mongoose.model('TransferRequest', transferRequestSchema);
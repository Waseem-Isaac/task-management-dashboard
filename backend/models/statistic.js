
const mongoose = require('mongoose');

const statisticSchema = new mongoose.Schema(
  {
    type:        { type: String, required: true, enum: ['total', 'completed', 'in-progress', 'overdue'] },
    title:       { type: String, required: true, trim: true },
    value:       { type: Number, required: true, default: 0 },
    change:      { type: String, required: true, default: '0' },
    changeLabel: { type: String, required: true, default: '' },
    changeType:  { type: String, required: true, enum: ['positive', 'negative', 'neutral'], default: 'neutral' },
    color:       { type: String, required: true, default: '#000000' },
  }, {
    timestamps: true,
  }
 );

const Statistic = mongoose.model('Statistic', statisticSchema);

module.exports = Statistic;
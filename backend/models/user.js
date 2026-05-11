// User model with basic fields and timestamps
const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name:                   { type: String, required: true, trim: true },
  email:                  { type: String, required: true, unique: true, trim: true, lowercase: true },
  password:               { type: String, select: false },
  active:                 { type: Boolean, default: false },
  invitationToken:        { type: String, select: false },   // stored as SHA-256 hash
  role:                   { type: String, enum: ['TEAM_LEAD', 'MEMBER'], required: true },
  managedBy:              { type: mongoose.Schema.Types.ObjectId, ref: 'User', select: '_id name email avatarUrl'}, // for MEMBER role
}, { 
  timestamps: true,
  toJSON:   { virtuals: true },  // avatar auto-included in res.json()
  toObject: { virtuals: true },
 });


userSchema.virtual('avatarUrl').get(function () {
  // email is already lowercased by the schema, no need to call toLowerCase()
  const hash = crypto.createHash('md5').update(this.email.trim()).digest('hex');
  const bgColor = hash.slice(0, 6);
  return `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(this.name)}&backgroundColor=${bgColor}&color=fff&size=200&scale=60`;
});


module.exports = mongoose.model('User', userSchema);;
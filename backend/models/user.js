// User model with basic fields and timestamps
const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name:                   { type: String, required: true, trim: true },
  email:                  { type: String, required: true, unique: true, trim: true, lowercase: true },
  password:               { type: String, select: false },
  active:                 { type: Boolean, default: false },
  invitationToken:        { type: String, select: false }   // stored as SHA-256 hash
}, { 
  timestamps: true,
  toJSON:   { virtuals: true },  // avatar auto-included in res.json()
  toObject: { virtuals: true },
 });


userSchema.virtual('avatarUrl').get(function () {
  // email is already lowercased by the schema, no need to call toLowerCase()
  const hash = crypto.createHash('md5').update(this.email.trim()).digest('hex');
  return `https://www.gravatar.com/avatar/${hash}?s=200&d=identicon`;
});


module.exports = mongoose.model('User', userSchema);;
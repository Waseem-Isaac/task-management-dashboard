const jwt = require('jsonwebtoken');
const User = require('../models/user');

/**
 * Middleware that verifies the JWT sent in the Authorization header.
 * Expects:  Authorization: Bearer <token>
 * On success, attaches the decoded payload to req.user and calls next().
 * On failure, responds with 401.
 */
async function isAuthenticated(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authHeader.slice(7); // strip "Bearer "

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  try {
    const user = await User.findById(decoded._id).select('-password');
    if (!user) {
      return res.status(401).json({ error: 'User no longer exists' });
    }
    req.user = user;
    next();
  } catch {
    return res.status(500).json({ error: 'Authentication check failed' });
  }
}

module.exports = isAuthenticated;

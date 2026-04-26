const mongoose = require('mongoose');

let connectionPromise = null;

function connectDB() {
  if (connectionPromise) return connectionPromise;

  connectionPromise = mongoose
    .connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((err) => {
      connectionPromise = null; // allow retry on failure
      return Promise.reject(err);
    });

  return connectionPromise;
}

module.exports = connectDB;

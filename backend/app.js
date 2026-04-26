require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDB = require('./config/db');

const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const authRouter  = require('./routes/auth');

const app = express();

const allowedOrigin = (process.env.CLIENT_URL || '').trim().replace(/\/$/, '');

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. curl, server-to-server)
    if (!origin) return callback(null, true);
    if (origin.replace(/\/$/, '') === allowedOrigin) {
      return callback(null, true);
    }
    callback(new Error(`CORS: origin '${origin}' not allowed`));
  },
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
};

// Handle preflight requests before any other middleware
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Ensure DB is connected before every request (safe for serverless)
app.use((req, res, next) => {
  connectDB().then(next).catch(next);
});

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

module.exports = app;

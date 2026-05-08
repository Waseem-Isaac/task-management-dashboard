require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDB = require('./config/db');

const usersRouter = require('./routes/users');
const boardRouter = require('./routes/boards/boards');
const authRouter  = require('./routes/auth');
const isAuthenticated = require('./middleware/isAuthenticated');

const app = express();

const corsOptions = {
  origin: (process.env.CLIENT_ORIGIN_URL || '').trim().replace(/\/$/, ''),
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
};

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
app.use('/users', isAuthenticated, usersRouter);
app.use('/boards', isAuthenticated , boardRouter);

module.exports = app;

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const authRouter  = require('./routes/auth');

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

module.exports = app;

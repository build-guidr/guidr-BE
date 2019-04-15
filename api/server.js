const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const restricted = require('../auth/restricted-middleware.js');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../api/users-router');
const tripsRouter = require('../api/trips-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/trips', restricted, tripsRouter);

server.get('/', (req, res) => {
	res.send("It's alive!");
});

module.exports = server;

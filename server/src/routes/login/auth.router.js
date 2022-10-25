const express = require('express');
const authRouter = express.Router();

const {getAuth} = require('./auth.controller');

authRouter.get('/login',getAuth);

module.exports = authRouter;

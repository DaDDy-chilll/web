const express = require('express');
const authRouter = express.Router();

const {getAuthLogin,getAuthSignup} = require('./auth.controller');

authRouter.get('/login',getAuthLogin);
authRouter.get('/signup',getAuthSignup)

module.exports = authRouter;

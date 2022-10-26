const express = require('express');
const authRouter = express.Router();

const {getAuthLogin,getAuthSignup,authSuccess} = require('./auth.controller');

authRouter.get('/login',getAuthLogin);
authRouter.get('/signup',getAuthSignup);

authRouter.get('/success',authSuccess);

module.exports = authRouter;

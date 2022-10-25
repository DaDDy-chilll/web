const express = require('express');
const api = express.Router();

const homeRouter = require('../routes/home/home.router');
const rouet1Router = require('../routes/route1/route1.router');
const route2Router = require('../routes/route2/route2.router');
const route3Router = require('../routes/route3/route3.router');
const authRouter = require('../routes/login/auth.router');

api.use('/',homeRouter);
api.use('/route1',rouet1Router);
api.use('/route2',route2Router);
api.use('/route3',route3Router);
api.use('/auth',authRouter);

module.exports = api;
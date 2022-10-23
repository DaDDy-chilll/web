const express = require('express');
const api = express.Router();

const homeRouter = require('../routes/home/home.router');
const rouet1Router = require('../routes/route1/route1.router');
const route2Router = require('../routes/route2/route2.router');

api.use('/',homeRouter);
api.use('/route1',rouet1Router);
api.use('/route2',route2Router);

module.exports = api;
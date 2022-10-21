const express = require('express');
const api = express.Router();

const homeRouter = require('../routes/home/home.router');
// const rouet1Router = require('../routes/route1/route1.router');

api.get('/',homeRouter);
// api.get('/route1',rouet1Router);

module.exports = api;
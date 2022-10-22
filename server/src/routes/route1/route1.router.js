const express = require('express');
const rouet1Router = express.Router();

const httpGetRoute1 = require('./route1.contoller');

rouet1Router.get('/',httpGetRoute1);

module.exports  = rouet1Router;
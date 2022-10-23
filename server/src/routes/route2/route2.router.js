const express = require('express');

const route2Router = express.Router();
const {httpPostInfo,httpGetInfo} = require('./route2.controller');
route2Router.get('/',httpGetInfo);
route2Router.post('/',httpPostInfo);

module.exports = route2Router;
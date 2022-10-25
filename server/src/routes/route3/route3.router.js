const express = require('express');
const {httpGetAllInfo,httpOneInfo} = require('./route3.controller');
const route3Router = express.Router();

route3Router.get('/',httpGetAllInfo);
route3Router.get('/:id',httpOneInfo);

module.exports=route3Router;
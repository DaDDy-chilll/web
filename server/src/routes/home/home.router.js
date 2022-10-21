const express = require('express');
const homeRouter = express.Router();

const httpGetHome = require('./home.controller');

homeRouter.get('/',httpGetHome);

module.exports=homeRouter;
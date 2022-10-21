const  path = require('path');
const express = require('express');
const app = express();

const api = require('./routes/api');

//middleware
app.use(express.static(path.join(__dirname,'..','public')));
app.use(express.json());
//middleware


app.use('/v1',api);


module.exports=app;
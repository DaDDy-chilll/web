const  path = require('path');
const express = require('express');
const bdparser = require('body-parser');
const app = express();

const api = require('./routes/api');

//middleware
app.use(express.json());
app.use(bdparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'..','public')));

//middleware


app.use('/',api);


module.exports=app;
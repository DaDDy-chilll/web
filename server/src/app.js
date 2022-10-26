const  path = require('path');
const express = require('express');

const bdparser = require('body-parser');
const app = express();
const api = require('./routes/api');


//setting
app.set('view engine','ejs');
app.set('views','views');
//setting
//middleware
app.use(express.json());
app.use(bdparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'..','public')));
//middleware


app.use('/',api);

module.exports=app;
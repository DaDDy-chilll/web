const express = require('express');
const authRouter = express.Router();

authRouter.get('/',(req,res)=>{
    res.render('index',{head:'Login'});
});

module.exports = authRouter;

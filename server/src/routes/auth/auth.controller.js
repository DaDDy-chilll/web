const express = require('express');
const crypto = require('crypto');


function getAuthLogin(req,res){
    res.render('auth',{
        title:'Login',
        action:'login',
        text:"You don't have account. You can create here -->",
        remind:'signup',
    });
};

function getAuthSignup(req,res){
    res.render('auth',{
        title:'SignUp',
        action:'signup',
        text:"You have already account. Please login here -->",
        remind:'login'
    });
    userSingup();
};




function userSingup(req,res,next){
    let salt = crypto.randomBytes(16);
    console.log(salt);
}
function authSuccess(req,res){
    res.render('success');
}


module.exports= {
    getAuthLogin,
    getAuthSignup,
    authSuccess,
}
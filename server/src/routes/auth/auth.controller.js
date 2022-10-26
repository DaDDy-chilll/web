const express = require('express');
const crypto = require('crypto');
cosnt

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
    })
};




function userSingup(req,res){

}


module.exports= {
    getAuthLogin,
    getAuthSignup,
}
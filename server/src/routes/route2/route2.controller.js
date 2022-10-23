const {info} = require('../../models/route2.model');
const path = require('path');
function httpPostInfo (req,res){
 const userinfo = req.body;
 info(userinfo);
 res.status(201).json(info);
}

function httpGetInfo (req,res){
    res.sendFile(path.join(__dirname,'..','..','..','public','route2.html'));
}

module.exports = {httpPostInfo,httpGetInfo};
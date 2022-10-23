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

async function httpPostInfo(req,res){
    const userData = req.body;
    if(!userData.email || !userData.fname || !userData.lname){
        return res.status(400).json({
            error:'Missing info property. Please check.'
        })
    }
    await info(userData);
    res.status(200).json(userData);
}

module.exports = {httpPostInfo,httpGetInfo};
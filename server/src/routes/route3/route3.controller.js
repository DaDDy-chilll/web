const {getAllInfo,oneInfo} = require('../../models/route3.model');


async function httpGetAllInfo(req,res){
    const allInfo =  await getAllInfo();
    if(!allInfo || allInfo.length !== 0){
        return res.status(400).json({
            error:'User info database connect poroblem or nothing have user info. Please reload or insert form route2.'
        })
    }
    res.status(200).json(allInfo)
}

async function httpOneInfo(req,res){
    const singleId = req.params.id;
    const user = await oneInfo(singleId);
    if(!user){
        return res.status(400).json({
            error:'User id is not exists'
        })
    }
    res.status(200).json(user);
}

module.exports = {httpGetAllInfo,httpOneInfo};

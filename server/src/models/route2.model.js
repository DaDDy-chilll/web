const route2 = require('./routes.mongo');
const id = 0;


async function lastestId (){
    const ID = await  route2.findOne().sort('-id');
    if(!ID){
        return id;
    }else{
        return ID.id;
    }
}

async function saveinfo(data){
    await route2.findOneAndUpdate({id:data.id},data,{upsert:true});
}

async function info (data){
    const endId = await lastestId() + 1;
   const newinfo = Object.assign(data,{
    id:endId
   });
//    console.log(newinfo);
   await saveinfo(newinfo);
}

module.exports = {
    info,
}
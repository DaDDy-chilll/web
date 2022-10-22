const route2 = require('./route2.mongo');
const id = 1;

const person = {
    no:id,
    fname:'Daddy',
    lname:'Chill',
    email:'paingsettk@gmail.com',
}

async function lastestId (){
    const ID = await  route2.findOne().sort('-id');
    if(!ID){
        return id;
    }else{
        return ID.id;
    }
}

function saveinfo(data){
    route2.findOneAndUpdate({no:data.no},person,{upsert:true});
}

async function info (data){
    const endId = await lastestId() + 1;
   const newinfo = Object.assign(data,{
    id:endId
   });
   await saveinfo(newinfo);
}

module.exports = {
    info,
}
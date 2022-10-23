const  route3 = require('./routes.mongo');

async function getAllInfo (){
   return await route3.find({},{
    '_id':0,'__v':0
   });
}

async function oneInfo(id){
    return await route3.find({id},{'_id':0,'__v':0});
}


module.exports={getAllInfo,oneInfo};
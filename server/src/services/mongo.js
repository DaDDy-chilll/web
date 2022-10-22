const mongoose = require('mongoose');
const MOGO_URL = 'mongodb+srv://nasa-api:nasapi123@nasacluster.uvu3kll.mongodb.net/web?retryWrites=true&w=majority'

mongoose.connection.once('open',()=>{
    console.log('Mogo is already connected');
});

mongoose.connection.on('error',(err)=>{
    console.error(err);
})
async function mongoConnect(){
    await mongoose.connect(MOGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

}

function mongoDisconnect(){
    mongoose.disconnect();
}
module.exports = {
mongoConnect,
mongoDisconnect,
}
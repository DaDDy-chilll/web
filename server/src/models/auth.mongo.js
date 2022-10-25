const mongoose = require('mongoose');
const authSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        require:true
    }
});
module.exports = mongoose.model('AUTHS',authSchema);
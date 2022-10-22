const mongoose = require('mongoose');
const route2Schema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model('Route',route2Schema);
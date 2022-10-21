const path = require('path');
function httpGetHome(req,res){
    res.sendFile(path.join(__dirname,'..' ,'public','index.html'))
};

module.exports = httpGetHome;
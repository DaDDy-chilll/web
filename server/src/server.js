const http = require('http');
const app = require('./app');
const PORT = 3000;
const server = http.createServer(app);


(function (){
server.listen(PORT,()=>console.log(`Server is running on PORT:${PORT}`));
})();
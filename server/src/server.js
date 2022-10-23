const http = require('http');
const app = require('./app');
const {mongoConnect}  = require('./services/mongo');
const PORT = 3000;
const server = http.createServer(app);


(async function (){
    await mongoConnect();
server.listen(PORT,()=>console.log(`Server is running on PORT:${PORT}`));
})();
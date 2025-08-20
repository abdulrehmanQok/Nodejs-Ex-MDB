const http=require('http');
const request_handle= require('./handler');
const server=http.createServer(request_handle);
PORT=3000;
server.listen(PORT,()=>{
  console.log(`server running port http://localhost:${PORT}`);
})
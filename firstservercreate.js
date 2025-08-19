const http=require('http');
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);
});
PORT=3000;
server.listen(PORT,()=>{
  console.log(`server running on port http://localhost:${PORT}`);
})
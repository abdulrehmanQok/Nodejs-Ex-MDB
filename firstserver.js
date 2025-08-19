const http=require('http');
const server=http.createServer((req,res)=>{
  //  console.log(req.url,req.method,req.headers);
  if(req.url=='/'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head> <title> personal information</title></head>');
  res.write('<body><h1>welcome to home </h1></body>')
  res.write('</html>');
  res.end();
  }
  else if (req.url=='/product'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head> <title> personal information</title></head>');
  res.write('<body><h1>checkout product </h1></body>')
  res.write('</html>');
  res.end();
  }
  else{
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head> <title> personal information</title></head>');
  res.write('<body><h1>abdul rehman</h1></body>')
  res.write('</html>');
  res.end();
  }
  
  //process.exit(); //stop event loop
});
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`server runnig on address http://localhost:${PORT}`);
});
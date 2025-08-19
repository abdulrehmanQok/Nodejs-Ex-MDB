const http=require('http');
const { url } = require('inspector');
const server=http.createServer((req,res)=>{
  //  console.log(req.url,req.method,req.headers);
  if(req.url=='/'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head> <title> personal information</title></head>');
  res.write('<body><h1>Enter your Detail </h1></body>')
  res.write('<form>')
  res.write('<input type="text" name="username" placeholder="Enter your Name">');
  res.write('<label for="male">Male</label>')
  res.write('<input type="radio" id="male" name="gender" value="male" />')
  res.write('<label for="female">FEMale</label>')
  res.write('<input type="radio" id="female" name="gender" value="female" />')
  res.write('<button type="submit" value="submit"> submit</button>')
  res.write('</form>');
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
  
  //process.exit(); //stop event loop
});
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`server runnig on address http://localhost:${PORT}`);
});
const http=require('http');
const server=http.createServer((req,res)=>{
  if (req.url=='/home'){
    res.write('<h1>welcome to home</h1>');
    return res.end();

  }
  else if (req.url=='/men'){
    res.write('<h1>welcome to men</h1>');
    return res.end();
  }
  
   res.write(`<html>
    <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>practice 1</title>
</head>
<body>
  <h1> ELO Ecommercer</h1>
  <ul>
    <li> <a href="/home"> Home</a></li>
    <li> <a href="/men"> Men</a></li>
    <li> <a href="/women"> Women</a></li>
    <li> <a href="/cart"> Cart</a></li>

  </ul>
  
</body>
    </html>`);
    res.end();
});
const PORT =3001;
server.listen(PORT,()=>{
  console.log(`server run on port http://localhost:${PORT}`)
;})
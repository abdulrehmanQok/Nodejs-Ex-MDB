const express =require('express');
const userrouter=require('./routes/userrouter');
const hostrouter=require('./routes/hostrouter');

const app=express();
app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})
app.use(express.urlencoded());
app.use(userrouter);
app.use("/host",hostrouter);
app.use((req,res,next)=>{
  res.status(404).send(`<h1>Page not found 404</h1>`)
})
PORT=3000;
app.listen(PORT,()=>{
  console.log(`server running on PORT http://localhost:${PORT}`);
})
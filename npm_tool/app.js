const express=require('express');
const app=express();
app.use("/",(req,res,next)=>{
  console.log("come in one middlewear",req.url,req.method);
  // res.send("<h1>come in one middlewear</h1>");
  next();
});
app.use("/submit",(req,res,next)=>{
  console.log("come in second middlewear",req.url,req.method);
    res.send("<h1>come in second middlewear</h1>");
})

const request_handler=  require('./user')

PORT=3000;
app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})
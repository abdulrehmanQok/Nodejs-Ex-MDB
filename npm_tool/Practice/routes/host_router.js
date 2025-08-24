const express=require('express');
const host_rout=express.Router();
const path=require('path');
host_rout.get("/contactus",(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','form.html'))
})

host_rout.post("/contactus",(req,res,next)=>{
  console.log(req.url,req.method,req.body);
  res.sendFile(path.join(__dirname,'../','views','register_success.html'))
})
module.exports=host_rout;
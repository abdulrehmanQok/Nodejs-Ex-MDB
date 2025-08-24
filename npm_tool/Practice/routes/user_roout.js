const express=require('express');
const user_rout=express.Router();
const path=require('path');
 user_rout.get("/",(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','home.html'))
})
module.exports=user_rout;
const express=require('express');
const path =require('path');
const routdir=require('../utils/path_util');
const userrouter=express.Router();
userrouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(routdir,'view','home.html'));
})
module.exports=userrouter;
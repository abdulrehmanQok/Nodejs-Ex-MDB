const express=require('express');
const path=require('path');
const hostrouter=express.Router();
const routdir=require('../utils/path_util');


hostrouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(routdir,'view','add_home.html'));
})
hostrouter.post("/add-home",(req,res,next)=>{
  console.log(req.body);
  res.sendFile(path.join(routdir,'view','register_successfuly.html'));
})
module.exports=hostrouter;
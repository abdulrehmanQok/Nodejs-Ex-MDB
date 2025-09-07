const express=require('express');
const path=require('path');
const hostrouter=express.Router();
const routdir=require('../utils/path_util');


hostrouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(routdir,'views','add_home.html'));
})
const register=[];
hostrouter.post("/add-home",(req,res,next)=>{
  register.push({houseName: req.body.addhome});
  res.sendFile(path.join(routdir,'views','register_successfuly.html'));
})
exports.hostrouter=hostrouter;
exports.register=register;
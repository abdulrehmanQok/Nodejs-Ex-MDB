const express=require('express');
const path =require('path');
const routdir=require('../utils/path_util');
const userrouter=express.Router();
const {register}=require('./hostrouter');
userrouter.get("/",(req,res,next)=>{
  console.log('register in user',register);
  res.render('home',{register});
  // res.sendFile(path.join(routdir,'views','home.html'));
})
module.exports=userrouter;
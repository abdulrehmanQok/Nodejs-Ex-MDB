const express=require('express');
const userrouter=express.Router();
userrouter.get("/",(req,res,next)=>{
  res.send(`<h1> Welcome to airbnb</h1>
    <a href="/host/add-home" > ADD HOME</a>
    `)
    next();
})
module.exports=userrouter;
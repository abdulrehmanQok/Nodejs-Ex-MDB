const express=require('express');
const hostrouter=express.Router();

hostrouter.get("/add-home",(req,res,next)=>{
  res.send(`<h1> Register your hoome</h1>
    <form action="/host/add-home" method="POST">
    <input type="text" name="add-home" placeholder="Enter your home"/>
    <input type="submit"/>
    </form>
    `)
})
hostrouter.post("/add-home",(req,res,next)=>{
  console.log(req.body);
  res.send(`<h1>home register successfully</h1>
    <a href="/"> Go back</a>
    `)
})
module.exports=hostrouter;
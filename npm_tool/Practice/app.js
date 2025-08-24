const express=require('express');
const app=express();
app.use ((req,res,next)=>{
  console.log("first middlewear",req.url,req.method);
  next();
})
app.use ((req,res,next)=>{
  console.log("second middlewear", req.url,req.method);
  next();
})
// app.use ((req,res,next)=>{
//   console.log("third  middlewear", req.url,req.method);
//   res.send("<h1> third middlewear response</h1>");
// })
app.get("/",(req,res,next)=>{
  console.log("handling / for get",req.url,req.method);
  res.send(`<h1>welcome
  </h1>`)
})
app.get("/contactus",(req,res,next)=>{
  console.log("handling / for get",req.url,req.method);
  res.send(`<h1>please give details
  </h1>
  <form action="contactus", method="POST">
  <input type="text name="name placholder="Enter your name"/>
  <br/>
  <input type="email" name="email" placeholder="Enter your email"/>
  <button type="submit"> Submit </button>
  </form>
  `)
})
app.post("/contactus",(req,res,next)=>{
  console.log("handling contact us for post", req.url,req.method);
  res.send(`<h1>we will contact you shortly </h1>`);
})
PORT=3001;
app.listen(PORT,()=>{
  console.log(`server running on port http://localhost:${PORT}`);
})
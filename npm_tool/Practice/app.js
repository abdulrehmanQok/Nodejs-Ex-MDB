const express=require('express');
const user_rout=require('./routes/user_roout');
const host_rout = require('./routes/host_router');
const path=require('path');
const app=express();
app.use ((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})
app.use(express.urlencoded());
app.use(user_rout);
app.use(host_rout);


PORT=3001;
app.listen(PORT,()=>{
  console.log(`server running on port http://localhost:${PORT}`);
})
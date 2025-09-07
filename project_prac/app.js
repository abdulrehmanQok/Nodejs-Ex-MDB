const express =require('express');
const userrouter=require('./routes/userrouter');
const {hostrouter}=require('./routes/hostrouter');
const path=require('path');
const routdir=require('./utils/path_util');
const app=express();
app.set('view engine','ejs');
app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})
app.use(express.urlencoded({ extended: false }));
app.use(userrouter);
app.use("/host",hostrouter);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(routdir,'views','404.html'));
})
PORT=3000;
app.listen(PORT,()=>{
  console.log(`server running on PORT http://localhost:${PORT}`);
})
const sum_request_handler=(req,res)=>{
console.log("in sum request",req.url);
const body=[];
req.on('data',(chunk)=>{
  console.log(chunk);
  body.push(chunk);
})
req.on('end',()=>{
  const buffer_chunk=Buffer.concat(body).toString();
  console.log(buffer_chunk);
  const params=new URLSearchParams(buffer_chunk);
  const bodyobj=Object.fromEntries(params);
  const result = Number(bodyobj.first) + Number(bodyobj.second);
  console.log(result);
})
}
module.exports=sum_request_handler;
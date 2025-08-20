
console.log("abdul rehman");
const fs=require('fs');
fs.writeFile("output.txt","writtingsjsjdjddddddd file",(err)=>{
  if (err) console.log("error occured")
    else console.log("file written successfullhy")
})
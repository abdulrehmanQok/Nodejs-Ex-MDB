const fs = require('fs');
console.log('1.  start of script');

// synchronous (blocking) operation
console.log('2.  read file synchronously');
const data_sync = fs.readFileSync('user   .txt','utf8');
console.log('3.  synchronous read complete');

// asynchronous (non-blocking) operation
console.log('4.  read file asynchronous');
fs.readFile('user.txt','utf8',(err,data_async)=>{
  if (err) throw err;
  console.log('6. asynchronous read complete');
});

console.log('5. end of script');

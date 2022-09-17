const fs = require('fs');

const stream = fs.createReadStream('./content/big.txt', {
  highWaterMark: 9000, 
  encoding: 'utf8'
});

// default size of the read buffer is 64kb
// last buffer - remainder
// highWaterMark - control size


stream.on('data', (result)=>{
  console.log(result);
})

stream.on('error', (err)=>{
  console.log(err);
})
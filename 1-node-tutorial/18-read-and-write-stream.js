const http = require('http');
const fs = require('fs');

var myReadStream = fs.createReadStream('./content/big.txt', 'utf8');
var myWriteStream = fs.createWriteStream('./content/writeStream.txt');

myReadStream.on('data' , (dataChunk) =>{
    console.log('new chunk receive');
    myWriteStream.write(dataChunk)
});

// by using write stream method, we need to manually create write stream and put the data chunk into the write 
// stream    
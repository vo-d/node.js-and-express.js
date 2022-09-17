const path = require('path');

// find your platform separator, in this case, it's \
console.log(path.sep);

const filePath = path.join('\content' , 'subfolder', 'text.txt' )
console.log(filePath)

// get the base name
const base = path.basename(filePath);
console.log(base);

// return absolute path
const absolute = path.resolve(__dirname, 'content' , 'subfolder', 'test.txt');
console.log(absolute)
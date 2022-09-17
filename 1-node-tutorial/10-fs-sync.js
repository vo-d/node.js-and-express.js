const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//writeFileSync('./content/result-sync.txt','here is the result: '+ first + second) create file with this content or overwrite it if the file existed
//Add {flag:'a'} to continue appending to the file
writeFileSync('./content/result-sync.txt','here is the result: '+ first + " " + second, {flag:'a'})

console.log('done with this task')
console.log('starting the next one')

// With the sync method, if a user is using the program, the other user can't use it since computer does not let the application continue before finishing a sync task.
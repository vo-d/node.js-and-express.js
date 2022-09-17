const {readFile, writeFile, read} = require('fs');
console.log('start')
// this is a ansync method. After the file is read, it will return err and result. The err and result will then be passed into the callback function of (err, result) to process later
// If there is no erro, the result will be the content of the file that is read
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err){
            console.log(err)
            return 
        }
        const second = result;
        // If there is error, print the error, if not, print the result, which is undefined. Then, this create file or overwrite the existing file.
        // We can also add flag to append string instead of overwrite file
        writeFile('./content/result-async.txt', 'here is the result: '+ first + second, {flag:'a'}, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task');
        })
    })
})

console.log('starting the next one')

// with the async approach, the moment we start this task, we just offload and continue with our code. So the application can continue with other user.
// our method will be run and return after the computer finished all the task in this application
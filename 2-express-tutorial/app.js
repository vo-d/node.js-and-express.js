const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('user hit the server')
    //provide info about the data that we're sending back
    res.writeHead(200, {'content-type':'text/html'})
    res.write('<h1>home page<h1>')
    res.end()
})

server.listen(5000);
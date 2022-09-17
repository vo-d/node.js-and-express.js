const http = require('http')

// request, response
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        console.log(req);
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('Here is our short history');
    }
    else{
        res.end(`\
        <h1>Oops!<h1>
        <p>We can't seem to find the page you are looking for<p>
        <a href="/">back home</a>
        `);
    }
    
})

// create a port that the site will be in. In this case, the port is 5000
server.listen(5000);
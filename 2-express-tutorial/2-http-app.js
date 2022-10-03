const http = require('http');
const filesystem = require('fs');

//get all files
// read stream act the same as read file sync, but async. Beside, this makes
//the page can only be refreshed once
const homePage = filesystem.createReadStream("./navbar-app/index.html");

// normal readFileSync
const homeStyles = filesystem.readFileSync("./navbar-app/styles.css");
const homeImage = filesystem.readFileSync("./navbar-app/logo.svg");
const homeLogic = filesystem.readFileSync("./navbar-app/browser-app.js");

//create server
const server = http.createServer((req,res)=>{
    //console.log('user hit the server')
    console.log(req.method)
    //console.log(req.url)

    //get user input url in the search bar
    const url = req.url;

    //home page
    if(url === '/'){
        //provide info about the data that we're sending back
        res.writeHead(200, {'content-type':'text/html'})
    
        // write to the page using pipe
        homePage.pipe(res)
 
    }

    //about page
    else if(url === '/about'){
        //provide info about the data that we're sending back
        res.writeHead(200, {'content-type':'text/html'})
    
        // write to the page
        res.write('<h1>about page<h1>')
        res.end()
    }

    // when we host the server of the home page, we also need to create the page for the style, external resource,
    //and javascript. It's the same as when we code in vscode that we need them all together in one file 
    // so that the main page can gather the resource to style and add logic to it

    // styles
    else if(url === '/styles.css'){
        //provide info about the data that we're sending back
        res.writeHead(200, {'content-type':'text/css'})
    
        // write to the page
        res.write(homeStyles)
        res.end()
    }

    // image/logo
    else if(url === '/logo.svg'){
        //provide info about the data that we're sending back
        res.writeHead(200, {'content-type':'image/svg+xml'})
    
        // write to the page
        res.write(homeImage)
        res.end()
    }

    // logic
    else if(url === '/browser-app.js'){
        //provide info about the data that we're sending back
        res.writeHead(200, { 'content-type': 'text/javascript' })

        // write to the page
        res.write(homeLogic)
        res.end()
    }

    //404
    else {
        //provide info about the data that we're sending back
        res.writeHead(404, {'content-type':'text/html'})
    
        // write to the page
        res.write('<h1>page not found<h1>')
        res.end()
    }
})

server.listen(5000);
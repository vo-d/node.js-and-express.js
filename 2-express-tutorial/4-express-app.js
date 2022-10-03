const express = require('express');
const app = express();
const path = require('path');


//setup static and middleware
// static asset are just file that server doesn't have to change like html file, image file, style file, or even js file
// this is the easy way to setup a web server, we just need to give express the file that include all the 
//components, express will handle them all.
// express.static will serve the static files inside of a file given in the parameter
app.use(express.static('./navbar-app'))

// The traditional way of setting up the web pages, which is  putting all of the file on the server one by one.
// In express, we don't have to tell the server the data type that it need to read. Express will handle it.
/*
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.get('/logo.svg', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/logo.svg'))
})
app.get('/styles.css', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/styles.css'))
})
app.get('/browser-app.js', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/browser-app.js'))
})
*/
app.all('*', (req, res)=>{
    res.status(404).send("resource not found")
})

app.listen(5000 ,()=>{
    console.log('server is listening on port 5000');
})
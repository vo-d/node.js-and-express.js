const express = require('express');
const app = express();

// app.get
// will say what to do base on a specific path 
// .status change the status code as you want. That give you more control of what you want to send back
app.get('/', (req, res)=>{
    console.log('user hit the resource')
    res.status(200).send('Home page')
})

app.get('/about', (req, res)=>{

    res.status(200).send('About page')
})

// app.all
// will say what to do base on all of the path that fit the description 
// * stand for all of the path that is not used
app.all('*', (req, res) =>{
    res.status(404).send('<h1>resource not found</h1>')
})
app.listen( 5000, ()=>{
    console.log("server is listening on port 5000...")
})


// app.post
// app.put
// app.delete


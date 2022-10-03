const express = require('express')
const app= express();
const logger = require('./logger.js')
const authorize = require('./authorize')


// There is a function that help solving the issue of the normal way to use middleware, that is app.use()
// depend on the position that we use the use() method, the middleware will apply to the part after the use() method
// also, depend on the position of the middleware inside app.use(), it will be apply in order from left to right
app.use([authorize, logger])

// if you use use() method with path, all of the children path will have that middleware
app.use('/api', logger)

app.get('/', (req, res)=> { 
    
    res.send('Home')
})

app.get('/about', (req, res)=> { 
    res.send('About')
})

app.get('/api', (req, res)=> { 
    res.send('About')
})

app.get('/api/products', (req, res)=> { 
    res.send('About')
})

app.get('/api/items', (req, res)=> { 
    res.send('About')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000.....')
})


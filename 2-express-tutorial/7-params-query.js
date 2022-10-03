const express = require('express')
const app= express();
const {products} = require('./data.js')


// res.json() will return the object or array of objects to the response, can not res.json multiple time
// can't send more than 1 object, that's why use array for more than 1 object
/* app.get('/', (req, res)=>{
    res.json([{name:"john"},{name: "Susan"}])
}) */
app.get('/', (req, res)=> {
    res.send('<h1> Home page </h1> <a href="/api/products">products</a>')
})


// array.map() will create a new array with the modified infomation using function on each array's item
app.get('/api/products', (req, res)=>{
    const newProducts = products.map((product)=>{
        /* const id = product.id 
        const name = product.name
        const image = product.image */
        const {id, name, image} = product
        return {id, name, image}
    })

    res.json(newProducts)
})



// :productID is the route parameter. It can be used to pass into parameter to modify website base on the url
// we can use console.log(req.params) to see the "productID" in the req.params object
app.get('/api/products/:productID', (req, res)=>{

    // get productID item from the req.params object
    const {productID} = req.params;
    console.log(req.params)
    // array.find() will find the first item in the array that satisfy the parameter
    // need to change productID to number type
    singleProduct = products.find((product)=> product.id === Number(productID))

    //if the singleProduct does not exist, or products.find() can't find anything match the parameter
    if (!singleProduct){
        res.status(200).send("Product does not exist")
    }
    return res.json(singleProduct)
})


app.get('/api/v1/query', (req, res) =>{
    //console.log(req.query)
    const {search, limit} = req.query;

    // [...something] will copy an array and any change made to one array will not affect another
    let sortedProducts = [...products]


    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1){
        res.status(200).send("No product match your search")
    }
    return
    res.status(200).json(sortedProducts)
})


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000.....')
})


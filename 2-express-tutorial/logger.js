const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // If we don't pass it to the next middleware, the rolling circle on the website will not stop because 
    //when we work with middleware, we must pass it onto a next middleware unless we terminate the cycle and 
    //sending our response
    next()
    // we can also terminate and send our response
    //res.end('testing')
}

module.exports = logger
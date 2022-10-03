const express = require('express')
const app = express()

// req => middleware => res
// the request comes in, the middleware take the request and will do something, some functionality, 
//then send to response

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

//This is a way to use middleware, but if there are more app.get, it will take time putting all logger in the parameter.
app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
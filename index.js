const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Init App
const app = express()

// Load View Engine
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')


app.use(bodyParser.json())
app.use(morgan('dev'))

// Set Public folder.
app.use(express.static(path.join(__dirname,'public')))

// Debug
app.use((req,res,next) => {
  console.log(`${req.method}: ${req.url}`)
  next()
})


// Home Route
app.get('/', (req, res) => {
  res.render('index', {
    title: "hello MF"
  })
})

// Start Server
const port = 8888;
app.listen(port,function() {
  console.log(`Server started on port ${port}`)
})

var express = require('express')
var app = express()

app.use(express.static(__dirname + '/../client/build'))

var dogsRouter = require('./controllers/dogs_controller.js')

app.use('/api/dogs', dogsRouter)

app.listen(3000, function() {
  console.log("server running...")
})

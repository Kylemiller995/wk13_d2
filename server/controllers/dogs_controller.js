var dogsQueryHelper = require('../db/query_helper.js')
var express = require('express')
var dogsRouter = express.Router()


dogsRouter.get('/', function(req, res) {
  console.log('api/dogs route hit')
  dogsQueryHelper.all(function (dogs){
    console.log("dog query .all callback called")
    res.json(dogs)
  })
})

module.exports = dogsRouter

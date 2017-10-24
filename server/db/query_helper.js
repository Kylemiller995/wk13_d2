var MongoClient = require('mongodb').MongoClient

var dogsQueryHelper = {
  url: "mongodb://localhost:27017/kyles_dogs",
  all: function(onQueryFinished) {
    
    console.log("all route hit")

    MongoClient.connect(this.url, function(err, db){
      console.log("connected ")

      var dogsCollection = db.collection('dogs')

      dogsCollection.find().toArray(function(err, docs){
        console.log("calling onquery ")
        onQueryFinished(docs)
      })
    })
  }
}

module.exports = dogsQueryHelper

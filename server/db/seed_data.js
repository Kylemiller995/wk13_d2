use kyles_dogs

db.dropDatabase()

db.dogs.insert([
  {
    name: "izzy",
    breed: "lab"
  },
  {
    name: "x",
    breed: "y"
  },
  {
    name: "creatively bankrupt",
    breed: "a dog or something"
  }
])

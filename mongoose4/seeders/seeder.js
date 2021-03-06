// Here is our seeder file. When we seed a database we are providing the initial set of data for our database. 
// Here we are requiring mongoose and connecting our seeder file to our models file.
// The seeder file is useful when we want to populate the database with data we want to develop 
const mongoose = require('mongoose');
const Grocery = require('../userModel')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/shopping", { useNewUrlParser: true, useUnifiedTopology: true  }, {versionKey: false});

// Setting up the mongoose connection
let db = mongoose.connection;

db.once("open", () => console.log('connected'));

Grocery.deleteMany({}).then(() => console.log('deleted')).catch(err => console.log(err))

// Creating multiple grocery items
const purchases = [{name: "Grapes", value: 2}, {name: "orange", value: 2}, {name: "tomato", value: 2}]

// Lets you know what error is in your schema .catch(err => console.log(err))
Grocery.create(purchases).then(purchases => console.log(purchases)).catch(err => console.log(err))

// To create one grocery item
// const purchase = new Grocery ({
//     name: "Apples",
//     value: 2,
//   });

//   purchase.save().then(saved => console.log(saved));

// How long to wait until the database closes, closes connection
  setTimeout(() => {

    db.close();

  },
2000
  ) 



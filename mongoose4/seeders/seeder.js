const mongoose = require('mongoose');
const Grocery = require('../userModel')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/shopping", { useNewUrlParser: true, useUnifiedTopology: true  }, {versionKey: false});

let db = mongoose.connection;

db.once("open", () => console.log('connected'));

Grocery.deleteMany({}).then(() => console.log('deleted')).catch(err => console.log(err))

const purchases = [{name: "Grapes", value: 2}, {name: "orange", value: 2}, {name: "tomato", value: 2}]

// Lets you know what error is in your schema .catch(err => console.log(err))

Grocery.create(purchases).then(purchases => console.log(purchases)).catch(err => console.log(err))

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



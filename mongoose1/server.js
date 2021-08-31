const mongoose = require("mongoose");

const Example = require("./exampleModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });
// If you delete 42, the error string message will appear. Because in the model it requires a number
const data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Let's begin mongoose",
  number: 42
};

Example.create(data)
  .then(dbExample => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  });
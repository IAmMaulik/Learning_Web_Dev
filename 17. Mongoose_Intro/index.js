const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, "CONNECTION ERROR: "))
db.once('open', ()=>{
  console.log("we're in!");
})
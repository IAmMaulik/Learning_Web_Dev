const express = require("express");
const mongoose = require("mongoose");
// const foodRouter = require("./routes/foodRoutes.js");

// SECRET USER INFO
let madmin = "Your Database admin account password";
let password = "Your password of the database admin account";
let clustername = "The name of the mongodb cluster";
let dbname = "Name of the db inside the cluster";

const app = express();

app.use(express.json());

mongoose.connect(
  `mongodb+srv://${madmin}:${password}@${clustername}.h5fdk.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

// app.use(foodRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});

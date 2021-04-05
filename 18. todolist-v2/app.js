const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

// MONGODB CONSTANTS
let madmin = "The databse admin password"
let mapassword = "Dtabse admin password"
let clustername = "cluster name"
let dbname = "database name"
const uri = `mongodb+srv://${madmin}:${mapassword}@${clustername}.h5fdk.mongodb.net/${dbname}?retryWrites=true&w=majority`

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = []
let workItems = []

app.get("/", function (req, res) {
  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;

  // All the mongoose code goes here
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", (req, res) => {
  res.render("about");
});

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});

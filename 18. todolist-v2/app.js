const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// MONGODB CONSTANTS
let madmin = "The databse admin password";
let mapassword = "Dtabse admin password";
let clustername = "cluster name";
let collection_name = "collection name";
const uri = `mongodb+srv://${madmin}:${mapassword}@${clustername}.h5fdk.mongodb.net/${collection_name}?retryWrites=true&w=majority`;

let items = [];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  const toDoItem = req.body.newItem;

  // All the mongodb code goes here
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

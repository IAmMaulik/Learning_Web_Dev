const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./userSchema");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GET ROUTES
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

// POST ROUTES
app.post("/register", (req, res) => {
  
});

app.post("/login", (req, res) => {
  
});

app.listen(3000, (req, res) => {
  console.log("Server started succesfully");
});

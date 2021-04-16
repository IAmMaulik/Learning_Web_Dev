const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 5;

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
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    if (err) console.log(err);
    let newUser = new User({
      email: req.body.username,
      password: hash,
    });

    newUser.save((err) => {
      if (err) console.log(err);
      else res.render("secrets");
    });
  });
});

app.post("/login", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  User.findOne({ email: email }, (err, foundUser) => {
    if (err) console.log(err);
    else {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (err) console.log(err);
          if (result === true) res.render("secrets");
        });
      }
    }
  });
});

app.listen(3000, (req, res) => {
  console.log("Server started succesfully");
});

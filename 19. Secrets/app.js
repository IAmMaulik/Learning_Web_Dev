const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./userSchema");
const session = require("express-session");
const passport = require("passport");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// INITAILIZING express-session AND passport
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

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

app.get("/secrets" ,(req, res) =>{
  if(req.isAuthenticated()) res.render("secrets")
  else res.redirect("/login")
})

// POST ROUTES
app.post("/register", (req, res) => {

  User.register({username: req.body.username}, req.body.password, (err, result) => {
    if(err){
      console.log(err);
      res.redirect("/register")
    }else{
      passport.authenticate("local")(req, res, () => {
        res.redirect("/secrets")
      })
    }
  })
});

app.post("/login", (req, res) => {});

app.listen(3000, (req, res) => {
  console.log("Server started succesfully");
});

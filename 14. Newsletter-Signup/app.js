const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { static } = require("express");

const app = express();

app.use(static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  console.log(req.body.email);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});

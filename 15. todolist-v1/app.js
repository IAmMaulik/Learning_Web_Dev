const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is working");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});

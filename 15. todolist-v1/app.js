const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});

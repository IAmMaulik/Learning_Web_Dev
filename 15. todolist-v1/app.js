const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// GLOBAL VARIBALES
let items = ["Example Item 1", "Example Item 2", "Example item 3"];

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    listTitle: day,
    newItems: items
  });
});

app.post("/", (req, res) => {
  let item = req.body.itemName;
  items.push(item);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});

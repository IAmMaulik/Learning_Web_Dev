const express = require("express");
const bodyParser = require("body-parser");
const date = require("./date.js");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const itemsSchema = {
  content: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  content: "Welcome to your To-Do list",
});

const item2 = new Item({
  content: "Hit the + button to add a new item",
});

const item3 = new Item({
  content: "<----- Click Here to Delete an item",
});

let defaultItems = [item1, item2, item3];

app.get("/", function (req, res) {
  const day = date.getDate();

  Item.find({}, (err, foundItems) => {
    if (err) {
      console.log(err);
    }
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully inserted default items to DB");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", {
        listTitle: day,
        newListItems: foundItems,
      });
    }
  });
});

app.post("/", function (req, res) {
  let itemName = req.body.newItem;
  let item = new Item({
    content: itemName,
  });

  item.save();
  res.redirect("/");

  // if (req.body.list === "Work") {
  //   workItems.push(item);
  //   res.redirect("/work");
  // } else {
  //   items.push(item);
  //   res.redirect("/");
  // }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/delete", (req, res) => {
  const checkedItemID = req.body.checkbox;
  Item.findByIdAndRemove(checkedItemID, (err) => {
    if (err) {
      console.log(err);
    }else{
      console.log(`Succesfully deleted Item with ID: ${checkedItemID}`);
    }
  });
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

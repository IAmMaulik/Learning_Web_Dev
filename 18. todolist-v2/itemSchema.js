const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  content: String,
});

const item = mongoose.model("Item", itemSchema);

module.exports = item;

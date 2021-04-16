require('dotenv').config()
const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", usersSchema);

module.exports = User;

require("dotenv").config();
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const usersSchema = mongoose.Schema({
  email: String,
  password: String,
});
usersSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", usersSchema);

module.exports = User;

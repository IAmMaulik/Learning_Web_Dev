require('dotenv').config()
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const usersSchema = mongoose.Schema({
  email: String,
  password: String,
});
usersSchema.plugin(encrypt, {
  secret: process.env.SECRET,
  encryptedFields: ["password"],
});

const User = mongoose.model("User", usersSchema);

module.exports = User;

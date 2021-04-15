const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const secret = require("./secretKey");

const usersSchema = mongoose.Schema({
  email: String,
  password: String,
});
usersSchema.plugin(encrypt, {
  secret: secret,
  encryptedFields: ["password"],
});

const User = mongoose.model("User", usersSchema);

module.exports = User;

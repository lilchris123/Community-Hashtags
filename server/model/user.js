const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  role: String,
  likedContent: [ String ]
});

const user = mongoose.model("user", userSchema);

module.exports = user;
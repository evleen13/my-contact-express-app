const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Email already taken"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
});
module.exports = mongoose.model("User", userSchema);
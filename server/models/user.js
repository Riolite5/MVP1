const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  displayName: String,
  firstName: String,
  lastName: String,
  googleId: String,
  booksRead: Array,
});

module.exports = mongoose.model("User", userSchema);

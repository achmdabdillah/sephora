const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  longitude: {
    type: String,
  },
  latitude: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);

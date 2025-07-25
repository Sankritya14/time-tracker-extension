const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema({
  url: String,
  duration: Number, // time in seconds
  category: String, // Productive / Unproductive / Neutral
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("UserData", UserDataSchema);

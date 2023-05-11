const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  service: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  town: {
    type: String,
    required: true,
  },
  gmapLat: {
    type: Number,
    required: true,
  },
  gmapLen: {
    type: Number,
    required: true,
  },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;

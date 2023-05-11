const mongoose = require("mongoose");

const TownSuggestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const TownSuggestionModel = mongoose.model(
  "TownSuggestion",
  TownSuggestionSchema
);

module.exports = TownSuggestionModel;

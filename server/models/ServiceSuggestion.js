const mongoose = require("mongoose");

const ServiceSuggestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const ServiceSuggestion = mongoose.model(
  "ServiceSuggestion",
  ServiceSuggestionSchema
);

module.exports = ServiceSuggestion;

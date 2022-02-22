const mongoose = require("mongoose");
const INF = mongoose.Schema({
  designation: {
    type: String,
    required: true,
  },
  typeOfInternship: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  modeOfInternship: {
    type: String,
    required: true,
  },
  placeOfPosting: {
    type: String,
    required: true,
  },
  stipendPerMonth: {
    type: String,
    required: true,
  },
  isPPO: {
    type: Boolean,
    required: true,
  },
  ctcIfPpo: {
    type: String,
    required: true,
  },
});

module.exports = INF;

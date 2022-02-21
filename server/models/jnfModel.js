const mongoose = require("mongoose");
const JNF = mongoose.Schema({
  designation: {
    type: String,
    required: true,
  },
  placeOfPosting: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ctcInLpa: {
    type: String,
    required: true,
  },
  ctcBreakup: {
    type: String,
    required: true,
  },
  bondDetails: {
    type: String,
    required: true,
  },
});

module.exports = JNF;

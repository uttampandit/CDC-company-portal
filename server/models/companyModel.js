const mongoose = require("mongoose");
const JNF = require("./jnfModel");
const INF = require("./infModel");
const companySchema = mongoose.Schema(
  {
    INFO: {
      name: {
        type: String,
        required: [true, "Please add a name"],
      },
      category: {
        type: String,
        required: [true, "Please add a category"],
      },
      website: {
        type: String,
        required: [true, "Please add a website"],
      },
      pocName: {
        type: String,
        required: [true, "Please add a pocName"],
      },
      designation: {
        type: String,
        required: [true, "Please provide a designation"],
      },
      registeredEmail: {
        type: String,
        required: [true, "Please add an email"],
        unique: false,
      },
      mobileNumber: {
        type: String,
        required: [true, "Please add a number"],
      },
      password: {
        type: String,
        required: [true, "Please type password"],
      },
    },
    JNF: {
      type: [JNF],
    },
    INF: {
      type: [INF],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);

const mongoose = require("mongoose");
const JNF = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  ctc: {
    type: Number,
    required: true,
  },
});
const INF = mongoose.Schema({});
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
        unique: true,
      },
      mobileNumber: {
        type: String,
        required: [true, "Please add a password"],
      },
    },
    JNF: {
      type: [JNF],
    },
    INF: {
      type: [INF],
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);

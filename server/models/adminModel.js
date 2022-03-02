const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    email:{
        type:String,
        required:[true,'admin Email is required']
    },
    password:{
        type:String,
        required:[true,'admin password is required']
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);

const mongoose = require("mongoose");
const url =
  "mongodb+srv://aadarshkt:M6sHWP3h8DpYP@cluster0.0vpa2.mongodb.net/TestDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleWare/errorMiddleWare");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;
const app = express();

connectDB();
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/companies', require('./routes/companyRoutes'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// const { MongoClient } = require('mongodb')

// const uri =
//   "mongodb+srv://admin-aadarsh:HJqIR1r4JtB3mnK9@cluster0.0vpa2.mongodb.net/sample_mflix?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// client.connect((err) => {
//   const collection = client.db("sample_mflix").collection("comments");

//   const query = { name: "Mercedes Tyler" };

//   const comment = collection.findOne(query);

//   if(err) {
//       console.log(err)
//   } else console.log(comment);

//   client.close();
// });

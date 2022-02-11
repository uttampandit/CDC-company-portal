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

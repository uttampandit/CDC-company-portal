//getting the joi schema for email and other validation while registering;
const registerSchema = require("../models/JoiModel");
//middleware for that validation
const registerValidate = (req, res, next) => {
  const { error } = registerSchema.validate(req.body.companyData);
  if (error) {
    console.log("invalid:", error.message);
  } else {
    next();
  }
};

module.exports = registerValidate;

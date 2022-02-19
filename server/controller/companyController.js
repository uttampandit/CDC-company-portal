const asyncHandler = require("express-async-handler");
const Company = require("../models/companyModel");

const getCompanies = asyncHandler(async (req, res) => {
  const id = req.params.companyId
  const company = await Company.findById(id);
  res.status(200).send(company);
  console.log(company);
});

const setCompanies = asyncHandler(async (req, res) => {
  const reqBody = req.body.companyData;
  console.log("This is the Requested Company for register" + reqBody);
  const INFO = {
    ...reqBody,
  };
  console.log("This the object form" + INFO);
  const company = await Company.create({
    INFO,
  });
  console.log("Company Object created");
  res.status(200).json(company.id);
});

const updateCompanies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Companies" });
});

const deleteCompanies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete company ${req.params.id}` });
});

module.exports = {
  getCompanies,
  setCompanies,
  updateCompanies,
  deleteCompanies,
};

const asyncHandler = require("express-async-handler");
const Company = require("../models/companyModel");

const getCompanies = asyncHandler(async (req, res) => {
  const id = req.params.companyid;
  const company = await Company.findById(id);
  res.status(200).send(company);
});

const setCompanies = asyncHandler(async (req, res) => {
  const reqBody = req.body.companyData;
  console.log(reqBody);
  const INFO = {
    ...reqBody,
  };
  const company = await Company.create({
    INFO,
  });

  res.status(200).json(company);
});

const updateCompanies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

const deleteCompanies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getCompanies,
  setCompanies,
  updateCompanies,
  deleteCompanies,
};

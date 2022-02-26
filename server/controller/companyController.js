const asyncHandler = require("express-async-handler");
const Company = require("../models/companyModel");

const getCompany = asyncHandler(async (req, res) => {
  const id = req.params.companyId;
  const company = await Company.findById(id);
  res.status(200).send(company);
});

const getCompanies = asyncHandler(async (req, res) => {
    const companies = await Company.find({})
    res.status(200).send(companies)
})

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
  console.log(company.id);
});

const updateCompanies = asyncHandler(async (req, res) => {
  const updatedInfo = req.body.companyData;
  const companyId = req.params.companyId;
  const company = await Company.findById(companyId);

  company.INFO = updatedInfo;

  const result = await company.save();
  res.send(JSON.stringify(result));
});

module.exports = {
  getCompany,
  getCompanies,
  setCompanies,
  updateCompanies,
};

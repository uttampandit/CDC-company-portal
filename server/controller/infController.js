const asyncHandler = require("express-async-handler");
const { any } = require("joi");

const Company = require("../models/companyModel");

const infHandler = asyncHandler(async (req, res, next) => {
  //can be used for front end purporse to display inf info
  const companyId = req.params.companyId;
  const infId = req.params.infId;

  const company = await Company.findById(companyId);
  const inf = company.INF.find((idInf) => infId === idInf.id);
  res.send(inf);
  console.log(inf);
});

const newinf = asyncHandler(async (req, res, next) => {
  const companyId = req.params.companyId;
  const company = await Company.findById(companyId);
  // getting data from post request
  const data = req.body;
  console.log(data);
  console.log(company);
  //simple pushing the inf
  company.INF.push(data);
  try {
    const result = await company.save();
    res.send(
      JSON.stringify({
        data,
      })
    );
  } catch (e) {
    console.log(e.message);
  }
});

const getallinf = asyncHandler(async (req, res, next) => {
  //care should be taken for allowing only admins to access this

  const companyId = req.params.companyId;

  console.log(companyId ? companyId : "Nothing");

  const allinfs = await Company.findById(companyId);

  res.send(JSON.stringify(allinfs));
});

const updateinf = asyncHandler(async (req, res, next) => {
  const updatedInf = req.body;
  const companyId = req.params.companyId;
  const infId = req.params.infId;
  const company = await Company.findById(companyId);

  // console.log(company);
  company.INF.pull({ _id: infId });
  company.INF.push(updatedInf);
  const result = await company.save();
  res.send(JSON.stringify(result));
});

const deleteinf = asyncHandler(async (req, res, next) => {
  const companyId = req.params.companyId;
  const infId = req.params.infId;
  const company = await Company.findById(companyId);
  console.log("delete");
  company.INF.pull({ _id: infId });
  const result = await company.save();
  res.send(JSON.stringify(result));
});
module.exports = { infHandler, newinf, getallinf, updateinf, deleteinf };

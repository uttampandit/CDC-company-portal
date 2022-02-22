const asyncHandler = require("express-async-handler");

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
  //simple pushing the inf
  company.INF.push(data);
  await company.save();
  res.send(
    JSON.stringify({
      data
    })
  );
});

const getallinf = asyncHandler(async (req, res, next) => {
  //care should be taken for allowing only admins to access this

  const companyId = req.params.companyId;

  console.log(companyId ? companyId : "Nothing");

  const allinfs = await Company.findById(companyId)


  res.send(JSON.stringify(allinfs));
});

module.exports = { infHandler, newinf, getallinf };

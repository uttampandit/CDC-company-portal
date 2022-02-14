const asyncHandler = require("express-async-handler");

const Company = require("../models/companyModel");

const infHandler = asyncHandler(async (req, res, next) => {
  //can be used for front end purporse to display inf info
  const id = req.params.id;
  const nfid = req.params.infid;
  const company = await Company.findById(id);
  const inf = company.INF.find((indinf) => infid === indinf.id);
  res.send(inf);
});

const newinf = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const company = await Company.findById(id);
  // getting data from post request
  const data = req.body;
  console.log(data);
  //simple pushing the inf
  company.INF.push(data);
  await company.save();
  res.send(
    JSON.stringify({
      data,
    })
  );
});

const getallinf = asyncHandler(async (req, res, next) => {
  //care should be taken for allowing only admins to access this
  const allinfs = await Company.find({});

  res.send(JSON.stringify(allinfs));
});

module.exports = { infHandler, newinf, getallinf };

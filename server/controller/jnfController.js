const asyncHandler = require("express-async-handler");

const Company = require("../models/companyModel");

const jnfHandler = asyncHandler(async (req, res, next) => {
  //can be used for front end purporse to display jnf info
  const id = req.params.id;
  const jnfid = req.params.jnfid;
  const company = await Company.findById(id);
  const jnf = company.JNF.find((indjnf) => jnfid === indjnf.id);
  res.send(jnf);
});

const newJnf = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const company = await Company.findById(id);
  // getting data from post request
  const data = req.body;

  //simple pushing the jnf
  company.JNF.push(data);
  await company.save();
  res.send(
    JSON.stringify({
      name: data.name,
      number: data.number,
    })
  );
});

const getalljnf = asyncHandler(async (req, res, next) => {
  //care should be taken for allowing only admins to access this
  const alljnfs = await Company.find({});

  res.send(JSON.stringify(alljnfs));
});

module.exports = { jnfHandler, newJnf, getalljnf };

const asyncHandler = require("express-async-handler");
const Company = require("../models/companyModel");

const jnfHandler = asyncHandler(async (req, res, next) => {
  const companyId = req.params.companyId;
  const jnfId = req.params.jnfId;

  const company = await Company.findById(companyId);
  const jnf = company.JNF.find((idJnf) => jnfId == idJnf.id)

  res.send(jnf);
  console.log(jnf);

});

const newJnf = asyncHandler(async (req, res, next) => {
  const companyId = req.params.companyId;
  const company = await Company.findById(companyId);
  // getting data from post request
  const data = req.body;
  console.log(data);
  //simple pushing the jnf
  company.JNF.push(data);
  await company.save();
  res.send(
    JSON.stringify({
      data
    })
  );
});

const getalljnf = asyncHandler(async (req, res, next) => {
  //care should be taken for allowing only admins to access this

  const companyId = req.params.companyId
  const company = await Company.findById(companyId)


  res.send(JSON.stringify(company));
});

module.exports = { jnfHandler, newJnf, getalljnf };

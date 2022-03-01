const asyncHandler = require("express-async-handler");
const Company = require("../models/companyModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const getCompany = asyncHandler(async (req, res) => {
  const id = req.params.companyId;
  const company = await Company.findById(id);
  res.status(200).send(company);
})

const authCompany = asyncHandler(async (req, res) => {
  const {email,password} = req.body;
  try{
    const companyExist = await Company.findOne({'INFO.registeredEmail': email});
    if(!companyExist){
      return res.send(null);
    }
    const passwordVerified = await bcrypt.compare(password,companyExist.INFO.password);
    if(!passwordVerified){
      return res.send(null);
    }
    //creating token
  
  const token = jwt.sign({userId:companyExist.id,email:companyExist.INFO.registeredEmail},"toBeKeptSecret",{expiresIn:"1h"});

  res.status(200).json({companyId : companyExist.id,token});
  console.log(companyExist.id);
    return res.send(companyExist.id);
  }catch(e){
    console.log(e.message);
    res.send('error');
  }
  
});

const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find({});
  res.status(200).send(companies);
});

const setCompanies = asyncHandler(async (req, res) => {
  const reqBody = req.body.companyData;
  console.log("This is the Requested Company for register" + reqBody);
  let hashedPassword;
  try{
    hashedPassword = await bcrypt.hash(reqBody.password,12);
  }catch(e){
    console.log(e);
  }
  const INFO = {
    ...reqBody,
    password : hashedPassword
  };
  console.log("This the object form" + INFO);
  const company = await Company.create({
    INFO,
  });
  console.log("Company Object created");
  //creating token
  
  const token = jwt.sign({userId:company.id,email:company.INFO.registeredEmail},"toBeKeptSecret",{expiresIn:"1h"});

  res.status(200).json({companyId : company.id,token});
  console.log(company.id);
});

const updateCompany = asyncHandler(async (req, res) => {
  const updatedInfo = req.body.companyData;
  const companyId = req.params.companyId;
  const company = await Company.findById(companyId);
  if(companyId !== req.userData.userId){
    //backend check
    throw Error('compnay id from request and jwt doesnt match')
  }
  company.INFO = updatedInfo;

  const result = await company.save();
  res.send(JSON.stringify(result));
});

module.exports = {
  getCompany,
  authCompany,
  getCompanies,
  setCompanies,
  updateCompany,
};

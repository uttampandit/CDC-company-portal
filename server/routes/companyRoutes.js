const express = require("express");
const authCheck = require('../middleWare/authCheck');
const router = express.Router();
const {
  getCompany,
  authCompany,
  getCompanies,
  setCompanies,
  updateCompany,
} = require("../controller/companyController");
const {
  jnfHandler,
  newJnf,
  updatejnf,
  deletejnf,
} = require("../controller/jnfController");
const {
  infHandler,
  newinf,
  updateinf,
  deleteinf,
} = require("../controller/infController");
const registerValidate = require("../middleWare/registerValidation");


//get all companies
router.get("/companies", getCompanies)
router.post("/login",authCompany);
router.post("/create", setCompanies);
router.post("/:companyId/updateCompany", updateCompany);

router.use(authCheck);
router.get('/:companyId',getCompany);


// //inf handling route

router.get("/:companyId/inf/:infId", infHandler);
router.post("/:companyId/inf", newinf);
router.post("/:companyId/:infId/updateinf", updateinf);
router.delete("/:companyId/:infId/deleteinf", deleteinf);

// //jnf handling route
router.get("/:companyId/jnf/:jnfId", jnfHandler);
router.post("/:companyId/jnf", newJnf);
router.post("/:companyId/:jnfId/updatejnf", updatejnf);
router.delete("/:companyId/:jnfId/deletejnf", deletejnf);

module.exports = router;

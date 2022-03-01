const express = require("express");
const router = express.Router();
const {
  getCompany,
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

router.get("/:companyId", getCompany);
router.post("/create", setCompanies);
router.post("/:companyId/updateCompany", updateCompany);

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

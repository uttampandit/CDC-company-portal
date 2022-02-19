const express = require("express");
const router = express.Router();
const {
  getCompanies,
  setCompanies,
  updateCompanies,
  deleteCompanies,
} = require("../controller/companyController");
const { jnfHandler, newJnf } = require("../controller/jnfController");
const { infHandler, newinf } = require("../controller/infController");
const registerValidate = require("../middleWare/registerValidation");

router.get("/:companyId", getCompanies);
router.post("/company", setCompanies)

// //inf handling route
router.get("/:companyId/inf/:infId", infHandler);
router.post("/:companyId/inf", newinf );  

// //jnf handling route
router.get("/:companyId/jnf/:jnfId", jnfHandler);
router.post("/:companyId/jnf", newJnf);  





router.post("/", registerValidate, setCompanies);

router.put("/:id", updateCompanies);

router.delete("/:id", deleteCompanies);

module.exports = router;

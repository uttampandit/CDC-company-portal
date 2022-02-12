const express = require("express");
const router = express.Router();
const {
  getCompanies,
  setCompanies,
  updateCompanies,
  deleteCompanies,
} = require("../controller/portalController");

const { jnfHandler, newJnf } = require("../controller/jnfController");

router.get("/:companyid", getCompanies);
//jnf handling route
router.get("/:id/:jnfid", jnfHandler);
router.post("/:id/jnf", newJnf);
//
router.post("/", setCompanies);

router.put("/:id", updateCompanies);

router.delete("/:id", deleteCompanies);

module.exports = router;

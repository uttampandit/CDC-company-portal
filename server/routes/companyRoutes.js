const express = require("express");
const router = express.Router();
const {
  getCompanies,
  setCompanies,
  updateCompanies,
  deleteCompanies,
} = require("../controller/portalController");

router.get("/", getCompanies);

router.post("/", setCompanies);

router.put("/:id", updateCompanies);

router.delete("/:id", deleteCompanies);

module.exports = router;

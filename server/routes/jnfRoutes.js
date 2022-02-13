const express = require("express");
const router = express.Router();
const { getalljnf } = require("../controller/jnfController");
//output all jnf for admin
router.get("/", getalljnf);

module.exports = router;

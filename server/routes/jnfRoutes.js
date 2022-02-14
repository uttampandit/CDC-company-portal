const express = require("express");
const router = express.Router();
const { getalljnf } = require("../controller/jnfController");
const { jnfHandler, newJnf } = require("../controller/jnfController");

//output all jnf for admin
router.get("/jnf", getalljnf);

//jnf handling route
router.get("/:id/:jnfid", jnfHandler);
router.post("/:id/jnf", newJnf);
//

module.exports = router;

const express = require("express");
const router = express.Router();
const { getallinf } = require("../controller/infController");
const { infHandler, newinf } = require("../controller/infController");

//output all inf for admin
router.get("/inf", getallinf);

//inf handling route
router.get("/:id/:infid", infHandler);
router.post("/:id/inf", newinf);
//

module.exports = router;

const express = require("express");
const router = express.Router();
const { addPackage, getPackage, updatePackage, removePackage,getsinglepackage} = require("../controller/TravelPController");

//addpackage
router.post("/", addPackage);

//getpackage
router.get("/all", getPackage);

router.put("/:id", updatePackage);

router.delete("/:id", removePackage);

router.get("/:id",getsinglepackage);

module.exports = router;

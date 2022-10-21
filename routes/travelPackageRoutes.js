const express = require("express");
const router = express.Router();
const { addPackage, getPackage, updatePackage, removePackage,getsinglepackage } = require("../controller/TravelPController");

//addpackage
router.post("/", addPackage);

//getpackage
router.get("/all", getPackage);

//@route PUT api/course/:id
//@desc Update an course
router.put("/:id", updatePackage);

//@route delete api/course/:id
//@desc Delete an course
router.delete("/:id", removePackage);

router.get("/:id",getsinglepackage);


module.exports = router;

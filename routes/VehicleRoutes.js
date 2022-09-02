const express = require("express");
const router = express.Router();
const { addvehicle, getVehicle, updateVehicle, removerVehicle } = require("../controller/VehicleController");

//addVehicle

router.post("/", addvehicle);

//getpackage

router.get("/all", getVehicle);

//@route PUT api/course/:id
//@desc Update an course
router.put("/:id", updateVehicle);

//@route delete api/course/:id
//@desc Delete an course
router.delete("/:id", removerVehicle);

module.exports = router;

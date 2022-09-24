const express = require("express");
const router = express.Router();
const { getAllTrips, getTripByID, addTrip, updateTrip, deleteTrip } = require("../controller/RideController");

router.get("/all", getAllTrips);
router.post("/", addTrip);
router.put("/", updateTrip);
router.delete("/:id", deleteTrip);
router.get("/:id", getTripByID);
module.exports = router;

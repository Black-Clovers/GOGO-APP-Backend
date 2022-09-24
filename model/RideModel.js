const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rideSchema = new Schema({
	trip_ID: { type: String, required: true },
	trip_Type: { type: String, required: true },
	client: { type: Object, required: true },
	driver: { type: Object, required: true },
	trip_pickUp_Location: { type: Object, required: true },
	trip_dropOff_Location: { type: Object, required: true },
	trip_pickUp_Date: { type: String, required: true },
	trip_pickUp_Time: { type: String, required: true },
	trip_vehicle_Type: { type: String, required: true },
	trip_Status: { type: String, required: true },
});

const RideModel = mongoose.model("RideModel", rideSchema);
module.exports = RideModel;

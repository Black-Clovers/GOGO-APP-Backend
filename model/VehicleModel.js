const mongoose = require("mongoose");

const Packageschema = new mongoose.Schema({
	owner_id: String,
	owner_name: String,
	owner_nic: String,
	owner_address: String,
	mobile_no: String,
	mobile_otp: String,
	vehicle_img: String,
	vehicle_no: String,
	chasse_no: String,
	lisence_no: String,
	vehicle_type: String,
	reg_date: String,
});

const VehicleRegModel = mongoose.mongoose.model("registervehicle", Packageschema);
module.exports = VehicleRegModel;

const mongoose = require("mongoose");

const Packageschema = new mongoose.Schema({
	package_id: String,
	package_name: String,
	vehicle_type: String,
	package_overview: String,
	package_include: String,
	contacts: String,
	image_url: String,
	add_info: String,
	price: String,
	mpassengers:String,
	status:String,
});

const TravelPackageModel = mongoose.model("travelpackage", Packageschema);
module.exports = TravelPackageModel;
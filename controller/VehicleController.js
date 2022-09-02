const VehicleRegModel = require("../model/VehicleModel");

const addvehicle = (req, res) => {
	const {
		owner_id,
		owner_name,
		owner_nic,
		owner_address,
		mobile_no,
		mobile_otp,
		vehicle_img,
		vehicle_no,
		chasse_no,
		lisence_no,
		vehicle_type,
		reg_date,
	} = req.body;

	const newvehicleregister = new VehicleRegModel({
		owner_id,
		owner_name,
		owner_nic,
		owner_address,
		mobile_no,
		mobile_otp,
		vehicle_img,
		vehicle_no,
		chasse_no,
		lisence_no,
		vehicle_type,
		reg_date,
	});

	//create Vehicle
	newvehicleregister
		.save()
		.then((createvehicle) => {
			res.json(createvehicle);
		})
		.catch((err) => {
			console.log(err);
		});
};

//getallVehicles

const getVehicle = async (req, res) => {
	try {
		const cors = await VehicleRegModel.find();
		res.json(cors);
	} catch (error) {
		res.status(400).json(error);
	}
};

//updateVehicle
const updateVehicle = async (req, res) => {
	const vehicleId = req.params.id;

	try {
		const cRs = await VehicleRegModel.findById(vehicleId);

		if (!cRs) {
			return res.status(404).json("There is a no Vehicles");
		}

		const {
			owner_id,
			owner_name,
			owner_nic,
			owner_address,
			mobile_no,
			mobile_otp,
			vehicle_img,
			vehicle_no,
			chasse_no,
			lisence_no,
			vehicle_type,
			reg_date,
		} = req.body;

		const cor = await VehicleRegModel.findByIdAndUpdate(vehicleId, {
			owner_id,
			owner_name,
			owner_nic,
			owner_address,
			mobile_no,
			mobile_otp,
			vehicle_img,
			vehicle_no,
			chasse_no,
			lisence_no,
			vehicle_type,
			reg_date,
		});
	} catch (error) {
		res.status(400).json(error.message);
	}
};

//deleteVehicle
const removerVehicle = async (req, res) => {
	const vehicleId = req.params.id;

	try {
		const crs = await VehicleRegModel.findById(vehicleId);
		if (!crs) {
			return res.status(404).json("There is no vehicle to remove");
		}

		const removerVehicle = await VehicleRegModel.findByIdAndDelete(vehicleId);
		res.status(200).json(removerVehicle);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = {
	addvehicle,
	getVehicle,
	updateVehicle,
	removerVehicle,
};

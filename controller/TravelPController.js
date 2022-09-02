const travelpackage = require("../model/TravelPackageModel");

const addPackage = (req, res) => {
	const {
		package_id,
		package_name,
		vehicle_type,
		package_overview,
		package_include,
		contacts,
		image_url,
		add_info,
		price,
	} = req.body;

	const newtravelPackage = new travelpackage({
		package_id,
		package_name,
		vehicle_type,
		package_overview,
		package_include,
		contacts,
		image_url,
		add_info,
		price,
	});

	//create
	newtravelPackage
		.save()
		.then((createPackage) => {
			res.json(createPackage);
		})
		.catch((err) => {
			console.log(error);
		});
};

//getallpackages

const getPackage = async (req, res) => {
	try {
		const cors = await travelpackage.find();
		res.json(cors);
	} catch (error) {
		res.status(400).json(error);
	}
};

//update
const updatePackage = async (req, res) => {
	const packageId = req.params.id;

	try {
		const cRs = await travelpackage.findById(packageId);

		if (!cRs) {
			return res.status(404).json("There is a no packages");
		}

		const {
			package_id,
			package_name,
			vehicle_type,
			package_overview,
			package_include,
			contacts,
			image_url,
			add_info,
			price,
		} = req.body;

		const cor = await travelpackage.findByIdAndUpdate(packageId, {
			package_id,
			package_name,
			vehicle_type,
			package_overview,
			package_include,
			contacts,
			image_url,
			add_info,
			price,
		});
	} catch (error) {
		res.status(400).json(error.message);
	}
};

//delete
const removePackage = async (req, res) => {
	const packageId = req.params.id;

	try {
		const crs = await travelpackage.findById(packageId);
		if (!crs) {
			return res.status(404).json("There is no Package to remove");
		}

		const removePackage = await travelpackage.findByIdAndDelete(packageId);
		res.status(200).json(removePackage);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = {
	addPackage,
	getPackage,
	updatePackage,
	removePackage,
};

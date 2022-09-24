const RideModel = require("../model/RideModel");

const getAllTrips = (req, res) => {
	RideModel.find((err, data) => {
		if (err) {
			res.status(500).json({
				message: "Error in getting all trips",
				error: err,
			});
		} else {
			res.status(200).json({
				message: "All trips details",
				data: data,
			});
		}
	});
};

const getTripByID = (req, res) => {
	RideModel.findById(req.params.id, (err, data) => {
		if (err) {
			res.status(500).json({
				message: "Error in getting trip by id",
				error: err,
			});
		} else {
			res.status(200).json({
				message: "Trip details",
				data: data,
			});
		}
	});
};

const updateTrip = (req, res) => {
	RideModel.findByIdAndUpdate(
		req.body.trip_ID,
		{
			$set: req.body,
		},
		(err, data) => {
			if (err) {
				res.status(500).json({
					message: "Error in updating trip",
					error: err,
				});
			} else {
				res.status(200).json({
					message: "Trip updated successfully",
					result: {
						data: data,
						response: true,
					},
				});
			}
		}
	);
};

const addTrip = (req, res) => {
	const newTrip = new RideModel(req.body);
	newTrip.save((err, data) => {
		if (err) {
			res.status(500).json({
				message: "Error in adding trip",
				error: err,
			});
		} else {
			res.status(200).json({
				message: "Trip added successfully",
				result: {
					data: data,
					response: true,
				},
			});
		}
	});
};

const deleteTrip = (req, res) => {
	RideModel.findByIdAndDelete(req.params.id, (err, data) => {
		if (err) {
			res.status(500).json({
				message: "Error in deleting trip",
				error: err,
			});
		} else {
			res.status(200).json({
				message: "Trip deleted successfully",
				result: {
					data: data,
					response: true,
				},
			});
		}
	});
};

module.exports = {
	getAllTrips,
	getTripByID,
	updateTrip,
	addTrip,
	deleteTrip,
};

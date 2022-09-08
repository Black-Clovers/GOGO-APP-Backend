const ClientModal = require("../model/ClientModel");

//addClient function
const addClient = (req, res) => {
	const {
		client_ID,
		client_FirstName,
		client_LastName,
		client_profilePicture,
		client_UserName,
		client_Email,
		client_Mobile,
		client_NIC,
		client_Password,
		client_Gender,
		client_DOB,
		client_Status,
		client_Address,
	} = req.body;

	const mongooseRes = new ClientModal({
		client_ID,
		client_FirstName,
		client_LastName,
		client_profilePicture,
		client_UserName,
		client_Email,
		client_Mobile,
		client_NIC,
		client_Password,
		client_Gender,
		client_DOB,
		client_Status,
		client_Address,
	});

	mongooseRes.save().then((result) => {
		res
			.status(200)
			.json({
				message: "Client added successfully",
				result: {
					data: result,
					response: true,
				},
			})
			.catch((err) => {
				console.log("err", err);
				res.status(400).json(err);
			});
	});
};

//getAll Client Details
const getAllClients = (req, res) => {
	// console.log("getAllClients", req);
	ClientModal.find((err, data) => {
		if (err) {
			res.status(500).json({
				message: "Error in getting all clients",
				error: err,
			});
		} else {
			res.status(200).json({
				message: "All clients details",
				data: data,
			});
		}
	});
};

// get a single client
const getClientByID = (req, res) => {
	ClientModal.findById(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).json({
				message: "Searched clients details",
				data: data,
			});
		}
	});
};

//update a client
const updateClient = (req, res) => {
	ClientModal.findByIdAndUpdate(
		req.body.client_ID,
		{
			$set: req.body,
		},
		(err, data) => {
			if (err) {
				res.status(500).json({
					message: "Error in updating client",
					error: err,
				});
			} else {
				res.status(200).json({
					message: "Client updated successfully",
					result: {
						data: data,
						response: true,
					},
				});
			}
		}
	);
};

//delete a client
const deleteClient = (req, res) => {
	console.log("deleteClient", req.params.id);
	ClientModal.findByIdAndDelete(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).json({
				message: "Client deleted successfully",
				result: {
					data: data,
					response: true,
				},
			});
		}
	});
};

module.exports = {
	addClient,
	getAllClients,
	getClientByID,
	updateClient,
	deleteClient,
};

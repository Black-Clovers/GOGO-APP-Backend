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

	console.log(mongooseRes);
	console.log(res);
};

//getAll Client Details
const getAllClients = (req, res) => {
	console.log("getAllClients", req);
	ClientModal.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
};

// get a single client
const getClientByID = (req, res) => {
	ClientModal.findById(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
};

//update a client
const updateClient = (req, res) => {
	ClientModal.findByIdAndUpdate(
		req.params.id,
		{
			$set: req.body,
		},
		(err, data) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.status(200).send(data);
			}
		}
	);
};

//delete a client
const deleteClient = (req, res) => {
	ClientModal.findByIdAndDelete(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
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

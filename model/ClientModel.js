const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clientSchema = new Schema({
	client_ID: { type: String, required: true },
	client_FirstName: { type: String, required: true },
	client_LastName: { type: String, required: true },
	client_profilePicture: { type: String, required: true },
	client_UserName: { type: String, required: true },
	client_Email: { type: String, required: true },
	client_Mobile: { type: String, required: true },
	client_NIC: { type: String, required: true },
	client_Password: { type: String, default: "12345" },
	client_Gender: { type: String, required: true },
	client_DOB: { type: String, required: true },
	client_Status: { type: String, required: true },
	client_Address: { type: String, required: true },
});

const ClientModel = mongoose.model("ClientModel", clientSchema);
module.exports = ClientModel;

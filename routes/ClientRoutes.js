const express = require("express");
const router = express.Router();
const {
	addClient,
	updateClient,
	deleteClient,
	getClientByID,
	getAllClients,
	loginOauth,
} = require("../controller/ClientController");

router.get("/all", getAllClients);
router.post("/", addClient);
router.post("/login", loginOauth);
router.put("/", updateClient);
router.delete("/:id", deleteClient);
router.get("/:id", getClientByID);
module.exports = router;

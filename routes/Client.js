const express = require("express");
const router = express.Router();
const { addClient, getClient, updateClient, removeClient, getSingleClient } = require("../controller/ClientController");

router.get("/all", getClient);
router.post("/", addClient);
router.put("/:id", updateClient);
router.delete("/:id", removeClient);
router.get("/:id", getSingleClient);
module.exports = router;

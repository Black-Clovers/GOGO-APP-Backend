const express = require("express");
const router = express.Router();

const {
	addVacancy,
	getVacancy,
	updateVacancy,
	removeVacancy,
	getsinglevacancy,
} = require("../controller/CareerController");

router.get("/all", getVacancy);

router.post("/", addVacancy);

router.put("/:id", updateVacancy);

router.delete("/:id", removeVacancy);

router.get("/:id", getsinglevacancy);

module.exports = router;

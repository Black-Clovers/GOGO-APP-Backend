const mongoose = require("mongoose");

const vacancySchema = new mongoose.Schema({
	Vacancy_Id: String,
	Vacancy_Category: String,
	Vacancy_Position: String,
	No_of_Positions: String,
	Details: String,
	Vacancy_Type: String,
	Date_Posted: String,
	Location: String,
	Salary: String,
});

const CareerModel = mongoose.model("CareerModel", vacancySchema);
module.exports = CareerModel;

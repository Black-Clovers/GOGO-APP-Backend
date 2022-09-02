const Vacancy = require("../model/CareerModel");

const addVacancy = (req, res) => {
	const {
		Vacancy_Id,
		Vacancy_Category,
		Vacancy_Position,
		No_of_Positions,
		Details,
		Vacancy_Type,
		Date_Posted,
		Location,
		Salary,
	} = req.body;
	const newVacancy = new Vacancy({
		Vacancy_Id,
		Vacancy_Category,
		Vacancy_Position,
		No_of_Positions,
		Details,
		Vacancy_Type,
		Date_Posted,
		Location,
		Salary,
	});

	newVacancy
		.save()
		.then((createdVacancy) => {
			res.json(createdVacancy);
		})
		.catch((err) => {
			console.log(err);
		});
};

const getVacancy = async (req, res) => {
	try {
		const vacancy = await Vacancy.find();
		res.json(vacancy);
	} catch (error) {
		res.status(400).json(error);
	}
};

const getsinglevacancy = async (req, res) => {
	try {
		const id = req.params.id;
		const vacancy = await Vacancy.findById(id);
		res.status(200).json(vacancy);
	} catch (error) {
		res.status(400).json(error);
	}
};

///////////////Update//////////////////

const updateVacancy = async (req, res) => {
	const Vacancy_id = req.params.id;

	try {
		const vacancy = await Vacancy.findById(Vacancy_id);
		if (!vacancy) {
		}
		const {
			Vacancy_Id,
			Vacancy_Category,
			Vacancy_Position,
			No_of_Positions,
			Details,
			Vacancy_Type,
			Date_Posted,
			Location,
			Salary,
		} = req.body;
		const Vaca = await Vacancy.findByIdAndUpdate(Vacancy_id, {
			Vacancy_Id,
			Vacancy_Category,
			Vacancy_Position,
			No_of_Positions,
			Details,
			Vacancy_Type,
			Date_Posted,
			Location,
			Salary,
		});

		res.status(201).json({ Updated: true });
	} catch (error) {
		res.status(400).json(error.message);
	}
};
/////////////////Delete/////////////////////
const removeVacancy = async (req, res) => {
	const Vacancy_id = req.params.id;
	try {
		const vacancy = await Vacancy.findById(Vacancy_id);
		if (!vacancy) {
			return res.status(404).json("There is no Vacancy");
		}
		const removevacancy = await Vacancy.findByIdAndDelete(Vacancy_id);
		res.status(200).json(removeVacancy);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = {
	addVacancy,
	getVacancy,
	updateVacancy,
	getsinglevacancy,
	removeVacancy,
};

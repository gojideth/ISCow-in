const cowVaccineService = require('../services/cow_vaccine_service');

/**
 * CRUD CONTROLLERS
 * 		*/

//!* POST[/cow_vaccines/create] Create a single COW_VACCINE
const createCowVaccine = async (req, res) => {
	console.log('createCowVaccine: [POST] /cow_vaccines/create');
	try {
		const cowVaccine = await cowVaccineService.createCowVaccine(req.body);
		console.log('body: ', req.body);
		if (cowVaccine.error) {
			return res.status(400).json({ ' Bad Request': cowVaccine.error });
		}
		return res.status(200).json({ Message: 'Cow Vaccine created', 'Cow Vaccine': cowVaccine });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* GET[/cow_vaccines/] Get all COW_VACCINES
const getAllCowVaccines = async (req, res) => {
	console.log('getAllCowVaccines: [GET] /cow_vaccines/');
	try {
		const allCowVaccines = await cowVaccineService.getAllCowVaccines();
		console.log('allCowVaccines: ', allCowVaccines);
		if (allCowVaccines.error) {
			return res.status(400).json({ ' Bad Request': allCowVaccines.error });
		}
		return res.status(200).json({allCowVaccines});
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* PUT[/cow_vaccines/:id] Update a single COW_VACCINE
const updateCowVaccine = async (req, res) => {
	console.log('updateCowVaccine: [PUT] /cow_vaccines/:id');
	try {
		const cowVaccine = await cowVaccineService.updateCowVaccine(req.body, req.params.id);
		console.log('cowVaccine: ', cowVaccine);
		if (cowVaccine.error) {
			return res.status(400).json({ ' Bad Request': cowVaccine.error });
		}
		return res.status(200).json({ Message: 'Cow Vaccine updated', 'Cow Vaccine': cowVaccine });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* DELETE[/cow_vaccines/:id] Delete a single COW_VACCINE
const deleteCowVaccine = async (req, res) => {
	console.log('deleteCowVaccine: [DELETE] /cow_vaccines/:id');
	try {
		const cowVaccine = await cowVaccineService.deleteCowVaccine(req.params.id);
		console.log('cowVaccine: ', cowVaccine);
		if (cowVaccine.error) {
			return res.status(400).json({ ' Bad Request': cowVaccine.error });
		}
		return res.status(200).json({ Message: 'Cow Vaccine deleted', 'Cow Vaccine': cowVaccine });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* GET[/cow_vaccines/:id] Get a single COW_VACCINE
const getCowVaccine = async (req, res) => {
	console.log('getCowVaccine: [GET] /cow_vaccines/:id');
	try {
		const cowVaccine = await cowVaccineService.getCowVaccine(req.params.id);
		console.log('cowVaccine: ', cowVaccine);
		if (cowVaccine.error) {
			return res.status(400).json({ ' Bad Request': cowVaccine.error });
		}
		return res.status(200).json(cowVaccine);
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

module.exports = {
	createCowVaccine,
	getAllCowVaccines,
	updateCowVaccine,
	deleteCowVaccine,
	getCowVaccine
};
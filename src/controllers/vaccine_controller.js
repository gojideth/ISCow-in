const vaccineService = require('../services/vaccine_service');

/**
 * CRUD CONTROLLERS
 * 		*/

//!* POST[/vaccines/create] Create a single VACCINE
const createVaccine = async (req, res) => {
	console.log('createVaccine: [POST] /vaccines/create');
	try {
		const vaccine = await vaccineService.createVaccine(req.body);
		console.log('body: ', req.body);
		if (vaccine.error) {
			return res.status(400).json({ ' Bad Request': vaccine.error });
		}
		return res.status(200).json({ Message: 'Vaccine created', Vaccine: vaccine });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* GET[/vaccines/] Get all VACCINES
const getAllVaccines = async (req, res) => {
	console.log('getAllVaccines: [GET] /vaccines/');
	try {
		const allVaccines = await vaccineService.getAllVaccines();
		console.log('allVaccines: ', allVaccines);
		if (allVaccines.error) {
			return res.status(400).json({ ' Bad Request': allVaccines.error });
		}
		return res.status(200).json(allVaccines);
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* PUT[/vaccines/:id] Update a single VACCINE
const updateVaccine = async (req, res) => {
	console.log('updateVaccine: [PUT] /vaccines/:id');
	try {
		const vaccine = await vaccineService.updateVaccine(req.body, req.params.id);
		console.log('vaccine: ', vaccine);
		if (vaccine.error) {
			return res.status(400).json({ ' Bad Request': vaccine.error });
		}
		return res.status(200).json({ Message: 'Vaccine updated', Vaccine: vaccine });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* DELETE[/vaccines/:id] Delete a single VACCINE
const deleteVaccine = async (req, res) => {
	console.log('deleteVaccine: [DELETE] /vaccines/:id');
	try {
		const vaccine = await vaccineService.deleteVaccine(req.params.id);
		console.log('vaccine: ', vaccine);
		if (vaccine.error) {
			return res.status(400).json({ ' Bad Request': vaccine.error });
		}
		return res.status(200).json({ Message: 'Vaccine deleted', Vaccine: vaccine });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* GET[/vaccines/:id] Get a single VACCINE
const getVaccine = async (req, res) => {
	console.log('getVaccine: [GET] /vaccines/:id');
	try {
		const vaccine = await vaccineService.getVaccine(req.params.id);
		console.log('vaccine: ', vaccine);
		if (vaccine.error) {
			return res.status(400).json({ ' Bad Request': vaccine.error });
		}
		return res.status(200).json(vaccine);
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

module.exports = {
	createVaccine,
	getAllVaccines,
	updateVaccine,
	deleteVaccine,
	getVaccine,
};
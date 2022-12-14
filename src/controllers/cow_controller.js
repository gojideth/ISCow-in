const cowService = require('../services/cow_service');

/**
 * CRUD CONTROLLERS
 * 		*/

//!* POST[/cows/create] Create a single COW
const createCow = async (req, res) => {
	console.log('createCow: [POST] /cows/create');
	try {
		const cow = await cowService.createCow(req.body);
		console.log('body: ', req.body);
		if (cow.error) {
			return res.status(400).json({ ' Bad Request': cow.error });
		}
		return res.status(200).json({ Message: 'Cow created', Cow: cow });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* GET[/cows/] Get all COWS
const getAllCows = async (req, res) => {
	console.log('getAllCows: [GET] /cows/');
	try {
		const allCows = await cowService.getAllCows();
		console.log('allCows: ', allCows);
		if (allCows.error) {
			return res.status(400).json({ ' Bad Request': allCows.error });
		}
		return res.status(200).json({allCows});
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* PUT[/cows/:id] Update a single COW
const updateCow = async (req, res) => {
	console.log('updateCow: [PUT] /cows/:id');
	try {
		const cow = await cowService.updateCow(req.body, req.params.id);
		console.log('cow: ', cow);
		if (cow.error) {
			return res.status(400).json({ ' Bad Request': cow.error });
		}
		return res.status(200).json({ Message: 'Cow updated', Cow: cow });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* DELETE[/cows/:id] Delete a single COW
const deleteCow = async (req, res) => {
	console.log('deleteCow: [DELETE] /cows/:id');
	try {
		const cow = await cowService.deleteCow(req.params.id);
		console.log('cow: ', cow);
		if (cow.error) {
			return res.status(400).json({ ' Bad Request': cow.error });
		}
		return res.status(200).json({ Message: 'Cow deleted', Cow: cow });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//* GET[/cows/:id] Get a single COW
const getCow = async (req, res) => {
	console.log('getCow: [GET] /cows/:id');
	try {
		const cow = await cowService.getCow(req.params.id);
		console.log('cow: ', cow);
		if (cow.error) {
			return res.status(400).json({ ' Bad Request': cow.error });
		}
		return res.status(200).json(cow);
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//*GET count of all COWS by a plot_id
const getCowCountByPlot = async (req, res) => {
	console.log('getCowCountByPlot: [GET] /cows/plot/:id');
	try {
		const cowCount = await cowService.getNumberCowsByPlot(req.params.id);
		console.log('cowCount: ', cowCount);
		if (cowCount.error) {
			return res.status(400).json({ ' Bad Request': cowCount.error });
		}
		return res.status(200).json({cowCount});
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//GET all COWS by a plot_id
const getCowsByPlot = async (req, res) => {
	console.log('getCowsByPlot: [GET] /cows/plot/:id');
	try {
		const cows = await cowService.getCowsByPlot(req.params.id);
		console.log('cows: ', cows);
		if (cows.error) {
			return res.status(400).json({ ' Bad Request': cows.error });
		}
		return res.status(200).json({cows});
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};


module.exports = {
	createCow,
	getAllCows,
	updateCow,
	deleteCow,
	getCow,
	getCowCountByPlot,
	getCowsByPlot
};
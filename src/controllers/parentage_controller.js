const parentageService = require('../services/parentage_service');

/**
 * CRUD CONTROLLERS
 * 		*/

//!* POST[/parentages/create] Create a single PARENTAGE
const createParentage = async (req, res) => {
	console.log('createParentage: [POST] /parentages/create');
	try {
		const parentage = await parentageService.createParentage(req.body);
		console.log('body: ', req.body);
		if (parentage.error) {
			return res.status(400).json({ ' Bad Request': parentage.error });
		}
		return res.status(200).json({ Message: 'Parentage created', Parentage: parentage });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* GET[/parentages/] Get all PARENTAGES
const getAllParentages = async (req, res) => {
	console.log('getAllParentages: [GET] /parentages/');
	try {
		const allParentages = await parentageService.getAllParentages();
		console.log('allParentages: ', allParentages);
		if (allParentages.error) {
			return res.status(400).json({ ' Bad Request': allParentages.error });
		}
		return res.status(200).json(allParentages);
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* PUT[/parentages/:id] Update a single PARENTAGE
const updateParentage = async (req, res) => {
	console.log('updateParentage: [PUT] /parentages/:id');
	try {
		const parentage = await parentageService.updateParentage(req.body, req.params.id);
		console.log('parentage: ', parentage);
		if (parentage.error) {
			return res.status(400).json({ ' Bad Request': parentage.error });
		}
		return res.status(200).json({ Message: 'Parentage updated', Parentage: parentage });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* DELETE[/parentages/:id] Delete a single PARENTAGE
const deleteParentage = async (req, res) => {
	console.log('deleteParentage: [DELETE] /parentages/:id');
	try {
		const parentage = await parentageService.deleteParentage(req.params.id);
		console.log('parentage: ', parentage);
		if (parentage.error) {
			return res.status(400).json({ ' Bad Request': parentage.error });
		}
		return res.status(200).json({ Message: 'Parentage deleted', Parentage: parentage });
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

//!* GET[/parentages/:id] Get a single PARENTAGE
const getParentage = async (req, res) => {
	console.log('getParentage: [GET] /parentages/:id');
	try {
		const parentage = await parentageService.getParentage(req.params.id);
		console.log('parentage: ', parentage);
		if (parentage.error) {
			return res.status(400).json({ ' Bad Request': parentage.error });
		}
		return res.status(200).json(parentage);
	} catch (error) {
		return res.status(400).json({ error: 'Bad Request' });
	}
};

module.exports = {
	createParentage,
	getAllParentages,
	updateParentage,
	deleteParentage,
	getParentage,
};
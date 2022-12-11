const cowWeightService = require('../services/cow_weight_service');

/**
 * CRUD CONTROLLERS
 * 		*/

//!* POST[/cow_weights/create] Create a single COW_WEIGHT
const createCowWeight = async (req, res) => {
	console.log('createCowWeight: [POST] /cow_weights/');
	console.log('createCowWeight : ', req.body);
	try {
		const cow_weight = await cowWeightService.createCow_weight(req.body);
		console.log('Ok createCowWeight: ', {cow_weight});
		res.send(cow_weight);
	} catch (error) {
		console.log('Error in createCowWeight: ' + 'Cow_weight: ', error);
		res.status(500).send({error: error});
	}
};

//!* GET[/cow_weights] Get all COW_WEIGHTS
const getAllCowWeights = async (req, res) => {
	console.log('getAllCowWeights: [GET] /cow_weights/');
	try {
		const allCow_weights = await cowWeightService.getAllCow_weights();
		console.log('OK getAllCowWeights: ', allCow_weights.map(cow_weights => cow_weights.dataValues));
		res.send(allCow_weights);
	} catch (error) {
		console.log('Error in getAllCowWeights ' + 'Cow_weights:', error);
		res.status(500).send({error: error});
	}
};

//!* PUT[/cow_weights/update] Update a single COW_WEIGHT
const updateCowWeight = async (req, res) => {
	console.log('updateCowWeight: [PUT] /cow_weights/');
	console.log('cow_weight : ', req.body);
	try {
		const cow_weight = await cowWeightService.updateCow_weight(req.body, req.params.id);
		console.log('Ok updateCowWeight: ', {cow_weight});
		res.send(cow_weight);
	} catch (error) {
		console.log('Error in updateCowWeight: ' + 'Cow_weight: ', error);
		res.status(500).send({error: error});
	}
};

//!* DELETE[/cow_weights/delete] Delete a single COW_WEIGHT
const deleteCowWeight = async (req, res) => {
	console.log('deleteCowWeight: [DELETE] /cow_weights/');
	console.log('cow_weight : ', req.body);
	try {
		const cow_weight = await cowWeightService.deleteCow_weight(req.params.id);
		console.log('Ok deleteCowWeight: ', {cow_weight});
		res.send(cow_weight);
	} catch (error) {
		console.log('Error in deleteCowWeight: ' + 'Cow_weight: ', error);
		res.status(500).send({error: error});
	}
};

//!* GET[/cow_weights/:id] Get a single COW_WEIGHT
const getCowWeight = async (req, res) => {
	console.log('getCowWeight: [GET] /cow_weights/:id');
	console.log('cow_weight : ', req.body);
	try {
		const cow_weight = await cowWeightService.getCow_weight(req.params.id);
		console.log('Ok getCowWeight: ', {cow_weight});
		res.send(cow_weight);
	} catch (error) {
		console.log('Error in getCowWeight: ' + 'Cow_weight: ', error);
		res.status(500).send({error: error});
	}
};

module.exports = {
	createCowWeight,
	getAllCowWeights,
	updateCowWeight,
	deleteCowWeight,
	getCowWeight
};
const Cow_weight = require('../models/cow_weight');

/**
 * !CRUD Controllers
 * */

//*Create a single COW_WEIGHT
const createCow_weight = async(cow_weight)=>{
	console.log('createCow_weight: [POST] /cow_weights/');
	console.log('cow_weight : ', cow_weight);
	try {
		const COW_WEIGHT_MODEL = {
			weight : cow_weight.weight,
			cow_id : cow_weight.cow_id
		};
		try {
			const cow_weight = await Cow_weight.create(COW_WEIGHT_MODEL);
			console.log('Ok createCow_weight: ', {cow_weight});
			return (cow_weight);
		} catch (error) {
			console.log('Error in createCow_weight: ' + 'Cow_weight: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Get all COW_WEIGHTS
const getAllCow_weights = async ()=>{
	console.log('getAllCow_weights: [GET] /cow_weights/');
	try {
		const allCow_weights = await Cow_weight.findAll();
		console.log('OK getAllCow_weights: ', allCow_weights.map(cow_weights => cow_weights.dataValues));
		return allCow_weights;
	} catch (error) {
		console.log('Error in getAllCow_weights ' + 'Cow_weights:', error
		);
		return error;
	}
};

//*Update a single COW_WEIGHT
const updateCow_weight = async (cow_weightData, id)=>{
	console.log('updateCow_weight: [PUT] /cow_weights/');
	console.log('cow_weight : ', cow_weightData);
	try {
		const COW_WEIGHT_MODEL = {
			weight : cow_weightData.weight,
			cow_id : cow_weightData.cow_id

		};
		try {
			const cow_weight = await Cow_weight.update(COW_WEIGHT_MODEL, {where: {id: id}});
			console.log('Ok updateCow_weight: ', {cow_weight});
			return cow_weight;
		} catch (error) {
			console.log('Error in updateCow_weight: ' + 'Cow_weight: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Delete a single COW_WEIGHT
const deleteCow_weight = async (id)=>{
	console.log('deleteCow_weight: [DELETE] /cow_weights/');
	try {
		const cow_weight = await Cow_weight.destroy({where: {id: id}});
		console.log('Ok deleteCow_weight: ', {cow_weight});
		return cow_weight;
	} catch (error) {
		console.log('Error in deleteCow_weight ' + 'Cow_weight:', error);
		return error;
	}
};

//*Get a single COW_WEIGHT
const getCow_weight = async (id)=>{
	console.log('getCow_weight: [GET] /cow_weights/:id');
	try {
		const cow_weight = await Cow_weight.findByPk(id);
		console.log('Ok getCow_weight: ', {cow_weight});
		return cow_weight;
	} catch (error) {
		console.log('Error in getCow_weight ' + 'Cow_weight:', error);
		return error;
	}
};

module.exports = {
	createCow_weight,
	getAllCow_weights,
	updateCow_weight,
	deleteCow_weight,
	getCow_weight
};
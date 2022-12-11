const Parentage = require('../models/parentage');

/**
 * !CRUD Controllers
 * */

//*Create a single PARENTAGE
const createParentage = async(parentage)=>{
	console.log('createParentage: [POST] /parentages/');
	console.log('parentage : ', parentage);
	try {
		const PARENTAGE_MODEL = {
			id : parentage.id,
		};
		try {
			const parentage = await Parentage.create(PARENTAGE_MODEL);
			console.log('Ok createParentage: ', {parentage});
			return (parentage);
		} catch (error) {
			console.log('Error in createParentage: ' + 'Parentage: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Get all PARENTAGES
const getAllParentages = async ()=>{
	console.log('getAllParentages: [GET] /parentages/');
	try {
		const allParentages = await Parentage.findAll();
		console.log('OK getAllParentages: ', allParentages.map(parentages => parentages.dataValues));
		return allParentages;
	} catch (error) {
		console.log('Error in getAllParentages ' + 'Parentages:', error
		);
		return error;
	}
};

//*Update a single PARENTAGE
const updateParentage = async (parentageData, id)=>{
	console.log('updateParentage: [PUT] /parentages/');
	console.log('parentage : ', parentageData);
	try {
		const PARENTAGE_MODEL = {
			id : parentageData.id,
		};
		try {
			const parentage = await Parentage.update(PARENTAGE_MODEL, {where: {id: id}});
			console.log('Ok updateParentage: ', {parentage});
			return (parentage);
		} catch (error) {
			console.log('Error in updateParentage: ' + 'Parentage: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Delete a single PARENTAGE
const deleteParentage = async (id)=>{
	console.log('deleteParentage: [DELETE] /parentages/');
	try {
		const parentage = await Parentage.destroy({where: {id: id}});
		console.log('Ok deleteParentage: ', {parentage});
		return (parentage);
	} catch (error) {
		console.log('Error in deleteParentage: ' + 'Parentage: ', error);
		return {error: error};
	}
};

//*Get a single PARENTAGE
const getParentage = async (id)=>{
	console.log('getParentage: [GET] /parentages/');
	try {
		const parentage = await Parentage.findOne({where: {id: id}});
		console.log('Ok getParentage: ', {parentage});
		return (parentage);
	} catch (error) {
		console.log('Error in getParentage: ' + 'Parentage: ', error);
		return {error: error};
	}
};

module.exports = {
	createParentage,
	getAllParentages,
	updateParentage,
	deleteParentage,
	getParentage
};
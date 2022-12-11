const Cow = require('../models/cow');

/**
 * !CRUD Controllers
 *  */

//*Create a single COW
const createCow = async (cow) => {
	console.log('createCow: ', cow);
	console.log('cow : ', cow);
	try {
		const COW_MODEL = {
			race : cow.race,
			born_date : cow.born_date,
			gender : cow.gender,
			origin : cow.origin,
			plot_id : cow.plot_id
		};
		try {
			const cow = await Cow.create(COW_MODEL);
			console.log('Ok createCow: ', {cow});
			return cow;
		} catch (error) {
			console.log('Error in createCow: ' + 'Cow: ', error);
			return {error: error};
		}
	} catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Get all COWS
const getAllCows = async () => {
	console.log('getAllCows: ');
	try {
		const allCows = await Cow.findAll();
		console.log('OK getAllCows: ', allCows.map(cows => cows.dataValues));
		return allCows;
	} catch (error) {
		console.log('Error in getAllCows ' + 'Cows:', error);
		return error;
	}
};

//*Update a single COW
const updateCow = async (cow, id) => {
	console.log('updateCow:[PUT] /cows/ ', cow);
	console.log('cow : ', cow);
	try {
		const COW_MODEL = {
			race : cow.race,
			born_date : cow.born_date,
			gender : cow.gender,
			origin : cow.origin,
			plot_id : cow.plot_id
		};
		try {
			const cow = await Cow.update(COW_MODEL, {where: {id: id}});
			console.log('Ok createCow: ', {cow});
			return cow;
		} catch (error) {
			console.log('Error in createCow: ' + 'Cow: ', error);
			return {error: error};
		}
	} catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Delete a single COW
const deleteCow = async (id) => {
	console.log('deleteCow: [DELETE] /cows/');
	console.log('cow : ', id);
	try {
		const cow = await Cow.destroy({where: {id: id}});
		console.log('Ok deleteCow: ', {cow});
		return cow;
	} catch (error) {
		console.log('Error in deleteCow: ' + 'Cow: ', error);
		return {error: error};
	}
};

//*Get a single COW
const getCow = async (id) => {
	console.log('getCow: [GET] /cows/');
	console.log('cow : ', id);
	try {
		const cow = await Cow.findOne({where: {id: id}});
		console.log('Ok getCow: ', {cow});
		return cow;
	} catch (error) {
		console.log('Error in getCow: ' + 'Cow: ', error);
		return {error: error};
	}
};

module.exports = {
	createCow,
	getAllCows,
	updateCow,
	deleteCow,
	getCow
};
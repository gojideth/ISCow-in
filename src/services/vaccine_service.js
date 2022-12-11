const Vaccine = require('../models/vaccine');

/**
 * !CRUD Controllers
 * */

//*Create a single VACCINE
const createVaccine = async(vaccine)=>{
	console.log('createVaccine: [POST] /vaccines/');
	console.log('vaccine : ', vaccine);
	try {
		const VACCINE_MODEL = {
			vaccine_name : vaccine.vaccine_name
		};
		try {
			const vaccine = await Vaccine.create(VACCINE_MODEL);
			console.log('Ok createVaccine: ', {vaccine});
			return (vaccine);
		} catch (error) {
			console.log('Error in createVaccine: ' + 'Vaccine: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Get all VACCINES
const getAllVaccines = async ()=>{
	console.log('getAllVaccines: [GET] /vaccines/');
	try {
		const allVaccines = await Vaccine.findAll();
		console.log('OK getAllVaccines: ', allVaccines.map(vaccines => vaccines.dataValues));
		return allVaccines;
	} catch (error) {
		console.log('Error in getAllVaccines ' + 'Vaccines:', error
		);
		return error;
	}
};

//*Update a single VACCINE
const updateVaccine = async (vaccineData, id)=>{
	console.log('updateVaccine: [PUT] /vaccines/');
	console.log('vaccine : ', vaccineData);
	try {
		const VACCINE_MODEL = {
			vaccine_name : vaccineData.vaccine_name
		};
		try {
			const vaccine = await Vaccine.update(VACCINE_MODEL, {where: {id: id}});
			console.log('Ok updateVaccine: ', {vaccine});
			return (vaccine);
		} catch (error) {
			console.log('Error in updateVaccine: ' + 'Vaccine: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Delete a single VACCINE
const deleteVaccine = async (id)=>{
	console.log('deleteVaccine: [DELETE] /vaccines/');
	try {
		const vaccine = await Vaccine.destroy({where: {id: id}});
		console.log('Ok deleteVaccine: ', {vaccine});
		return (vaccine);
	} catch (error) {
		console.log('Error in deleteVaccine: ' + 'Vaccine: ', error);
		return {error: error};
	}
};

//*Get a single VACCINE
const getVaccine = async (id)=>{
	console.log('getVaccine: [GET] /vaccines/:id');
	try {
		const vaccine = await Vaccine.findOne({where: {id: id}});
		console.log('Ok getVaccine: ', {vaccine});
		return (vaccine);
	} catch (error) {
		console.log('Error in getVaccine: ' + 'Vaccine: ', error);
		return {error: error};
	}
};

module.exports = {
	createVaccine,
	getAllVaccines,
	updateVaccine,
	deleteVaccine,
	getVaccine
};
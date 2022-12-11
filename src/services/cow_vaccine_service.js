const Cow_vaccine = require('../models/cow_vaccine');

/**
 * !CRUD Controllers
 * */

//*Create a single COW_VACCINE
const createCow_vaccine = async(cow_vaccine)=>{
	console.log('createCow_vaccine: [POST] /cow_vaccines/');
	console.log('cow_vaccine : ', cow_vaccine);
	try {
		const COW_VACCINE_MODEL = {
			vaccine_date : cow_vaccine.vaccine_date,
			check_id : cow_vaccine.check_id,
			vaccine_id : cow_vaccine.vaccine_id,
			cow_id : cow_vaccine.cow_id,
		};
		try {
			const cow_vaccine = await Cow_vaccine.create(COW_VACCINE_MODEL);
			console.log('Ok createCow_vaccine: ', {cow_vaccine});
			return (cow_vaccine);
		} catch (error) {
			console.log('Error in createCow_vaccine: ' + 'Cow_vaccine: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Get all COW_VACCINES
const getAllCow_vaccines = async ()=>{
	console.log('getAllCow_vaccines: [GET] /cow_vaccines/');
	try {
		const allCow_vaccines = await Cow_vaccine.findAll();
		console.log('OK getAllCow_vaccines: ', allCow_vaccines.map(cow_vaccines => cow_vaccines.dataValues));
		return allCow_vaccines;
	} catch (error) {
		console.log('Error in getAllCow_vaccines ' + 'Cow_vaccines:', error
		);
		return error;
	}
};

//*Update a single COW_VACCINE
const updateCow_vaccine = async (cow_vaccineData, id)=>{
	console.log('updateCow_vaccine: [PUT] /cow_vaccines/');
	console.log('cow_vaccine : ', cow_vaccineData);
	try {
		const COW_VACCINE_MODEL = {
			vaccine_date : cow_vaccineData.vaccine_date,
			check_id : cow_vaccineData.check_id,
			vaccine_id : cow_vaccineData.vaccine_id,
			cow_id : cow_vaccineData.cow_id,
		};
		try {
			const cow_vaccine = await Cow_vaccine.update(COW_VACCINE_MODEL, {where: {id: id}});
			console.log('Ok updateCow_vaccine: ', {cow_vaccine});
			return (cow_vaccine);
		} catch (error) {
			console.log('Error in updateCow_vaccine: ' + 'Cow_vaccine: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Delete a single COW_VACCINE
const deleteCow_vaccine = async (id)=>{
	console.log('deleteCow_vaccine: [DELETE] /cow_vaccines/');
	try {
		const cow_vaccine = await Cow_vaccine.destroy({where: {id: id}});
		console.log('Ok deleteCow_vaccine: ', {cow_vaccine});
		return (cow_vaccine);
	} catch (error) {
		console.log('Error in deleteCow_vaccine: ' + 'Cow_vaccine: ', error);
		return {error: error};
	}
};

module.exports = {
	createCow_vaccine,
	getAllCow_vaccines,
	updateCow_vaccine,
	deleteCow_vaccine
};

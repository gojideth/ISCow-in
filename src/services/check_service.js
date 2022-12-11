const Check = require('../models/check');


/**
 * !CRUD Controllers
 * */

//*Create a single CHECK
const createCheck = async(check)=>{
	console.log('createCheck: [POST] /checks/');
	console.log('check : ', check);
	try {
		const CHECK_MODEL = {
			check_date : check.check_date,
			notes : check.notes,
			is_vaccinated : check.is_vaccinated,
			is_dewormed : check.is_dewormed,
		};
		try {
			const check = await Check.create(CHECK_MODEL);
			console.log('Ok createCheck: ', {check});
			return (check);
		} catch (error) {
			console.log('Error in createCheck: ' + 'Check: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Get all CHECKS
const getAllChecks = async ()=>{
	console.log('getAllChecks: [GET] /checks/');
	try {
		const allChecks = await Check.findAll();
		console.log('OK getAllChecks: ', allChecks.map(checks => checks.dataValues));
		return allChecks;
	} catch (error) {
		console.log('Error in getAllChecks ' + 'Checks:', error
		);
		return error;
	}
};

//*Update a single CHECK
const updateCheck = async (checkData, id)=>{
	console.log('updateCheck: [PUT] /checks/');
	console.log('check : ', checkData);
	try {
		const CHECK_MODEL = {
			check_date : checkData.check_date,
			notes : checkData.notes,
			is_vaccinated : checkData.is_vaccinated,
			is_dewormed : checkData.is_dewormed,
		};
		try {
			const check = await Check.update(CHECK_MODEL, {where: {id: id}});
			console.log('Ok updateCheck: ', {check});
			return (check);
		} catch (error) {
			console.log('Error in updateCheck: ' + 'Check: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Delete a single CHECK
const deleteCheck = async (id)=>{
	console.log('deleteCheck: [DELETE] /checks/');
	try {
		const check = await Check.destroy({where: {id: id}});
		console.log('Ok deleteCheck: ', {check});
		return (check);
	} catch (error) {
		console.log('Error in deleteCheck: ' + 'Check: ', error);
		return {error: error};
	}
};


module.exports = {
	createCheck,
	getAllChecks,
	updateCheck,
	deleteCheck
};
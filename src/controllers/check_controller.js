const checkService = require('../services/check_service');

/**
 * CRUD CONTROLLERS
 */

//!* POST[/checks/create] Create a single CHECK
const createCheck = async(req, res)=>{
	console.log('createCheck: [POST] /checks/create');
	try {
		const check = await checkService.createCheck(req.body);
		console.log('body: ', req.body);
		if(check.error){
			return res.status(400).json({' Bad Request': check.error});
		}
		return res.status(200).json({'Message': 'Check created', 'Check': check});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//!* GET[/checks/] Get all CHECKS
const getAllChecks = async(req, res)=>{
	console.log('getAllChecks: [GET] /checks/');
	try {
		const allChecks = await checkService.getAllChecks();
		console.log('allChecks: ', allChecks);
		if(allChecks.error){
			return res.status(400).json({' Bad Request': allChecks.error});
		}
		return res.status(200).json({allChecks});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//!* PUT[/checks/:id] Update a single CHECK
const updateCheck = async(req, res)=>{
	console.log('updateCheck: [PUT] /checks/:id');
	try {
		const check = await checkService.updateCheck(req.body, req.params.id);
		console.log('check: ', check);
		if(check.error){
			return res.status(400).json({' Bad Request': check.error});
		}
		return res.status(200).json({'Message': 'Check updated', 'Check': check});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//!* DELETE[/checks/:id] Delete a single CHECK
const deleteCheck = async(req, res)=>{
	console.log('deleteCheck: [DELETE] /checks/:id');
	try {
		const check = await checkService.deleteCheck(req.params.id);
		console.log('check: ', check);
		if(check.error){
			return res.status(400).json({' Bad Request': check.error});
		}
		return res.status(200).json({'Message': 'Check deleted', 'Check': check});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};


//!* GET[/checks/:id] Get a single CHECK
const getCheck = async(req, res)=>{
	console.log('getCheck: [GET] /checks/:id');
	try {
		const check = await checkService.getCheck(req.params.id);
		console.log('check: ', check);
		if(check.error){
			return res.status(400).json({' Bad Request': check.error});
		}
		return res.status(200).json(check);
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

module.exports = {
	createCheck,
	getAllChecks,
	updateCheck,
	deleteCheck,
	getCheck
};
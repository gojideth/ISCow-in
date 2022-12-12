const farmService = require('../services/farm_service');

/**
 * CRUD CONTROLLERS
*/

//!* POST[/farms/create] Create a single FARM
const createFarm = async(req, res)=>{
	console.log('createFarm: [POST] /farms/create');
	try {
		const farm = await farmService.createFarm(req.body);
		console.log('body: ', req.body);
		if(farm.error){
			return res.status(400).json({' Bad Request': farm.error});
		}
		return res.status(200).json({'Message': 'Farm created', 'Farm': farm});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//!* GET[/farms/] Get all FARMS
const getAllFarms = async(req, res)=>{
	console.log('getAllFarms: [GET] /farms/');
	try {
		const farms = await farmService.getAllFarms();
		if(farms.error){
			return res.status(400).json({error: farms.error});
		}
		return res.status(200).json({farms});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

const updateFarm = async(req, res)=>{
	console.log('updateFarm: [PUT] /farms/update');
	try {
		const farm = await farmService.updateFarm(req.body, req.params.id);
		console.log('body: ', req.body);
		if(farm.error){
			return res.status(400).json({' Bad Request': farm.error});
		}
		return res.status(200).json({'Message': 'Farm updated', 'Farm': farm});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

const deleteFarm = async(req, res)=>{
	console.log('deleteFarm: [DELETE] /farms/');
	try {
		const farm = await farmService.deleteFarm(req.params.id);
		console.log('body: ', req.body);
		if(farm.error){
			return res.status(400).json({'Bad Request': farm.error});
		}
		return res.status(200).json({'Message': 'Farm deleted', 'Farm': farm});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

const getFarmById = async(req, res)=>{
	console.log('getFarmById: [GET] /farms/:id');
	try {
		const farm = await farmService.getFarm(req.params.id);
		console.log('body: ', req.body);
		if(farm.error){
			return res.status(400).json({' Bad Request': farm.error});
		}
		return res.status(200).json({'Message': 'Farm found', 'Farm': farm});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//*GET all plots by farm ID: [GET] /farms/number/:id
const getFarmPlots = async(req, res)=>{
	console.log('getFarmPlots: [GET] /farms/:id/plots');
	try {
		const farm = await farmService.getFarmPlots(req.params.id);
		console.log('body: ', req.body);
		if(farm.error){
			return res.status(400).json({' Bad Request': farm.error});
		}
		return res.status(200).json({'Message': 'Farm found', 'Farm': farm});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//*GET all farms by user ID: [GET] /farms/user/:id
const getFarmsByUser = async(req, res)=>{
	console.log('getFarmsByUser: [GET] /farms/user/:id');
	try {
		const farm = await farmService.getFarmsFromPerson(req.params.id);
		console.log('body: ', req.body);
		if(farm.error){
			return res.status(400).json({' Bad Request': farm.error});
		}
		return res.status(200).json({'Message': 'Success', 'Farm': farm});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};




module.exports = {
	createFarm,
	getAllFarms,
	updateFarm,
	deleteFarm,
	getFarmById,
	getFarmPlots,
	getFarmsByUser
};
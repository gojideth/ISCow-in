const  Farm = require('../models/farm');

/**
 * !CRUD Controllers
 *  */

//*Create a single FARM
const createFarm = async(farm)=>{
	console.log('createFarm: [POST] /farms/');
	console.log('farm : ', farm);
	try {
		const FARM_MODEL = {
			farm_name: farm.farm_name,
			farm_location: farm.farm_location,
			farm_size: farm.farm_size,
			person_id: farm.person_id
		};
		try {
			const farm = await Farm.create(FARM_MODEL);
			console.log('Ok createFarm: ', {farm});
			return (farm);
		} catch (error) {
			console.log('Error in createFarm: ' + 'Farm: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Get all FARMS
const getAllFarms = async ()=>{
	console.log('getAllFarms: [GET] /farms/');
	try {
		const allFarms = await Farm.findAll();
		console.log('OK getAllFarms: ', allFarms.map(farms => farms.dataValues));
		return allFarms;
	} catch (error) {
		console.log('Error in getAllFarms ' + 'Farms:', error);
		return error;
	}
};

//*Update a single FARM
const updateFarm = async (farmData, id)=>{
	console.log('updateFarm: [PUT] /farms/');
	console.log('farm : ', farmData);
	try {
		const FARM_MODEL = {
			farm_name : farmData.farm_name,
			farm_location : farmData.farm_location,
			farm_size : farmData.farm_size
		};

		try {
			const farm = await Farm.update(FARM_MODEL, {where: {id: id}});
			console.log('Ok updateFarm: ', {farm});
			return (farm);
		} catch (error) {
			console.log('Error in updateFarm: ' + 'Farm: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Delete a single FARM
const deleteFarm = async (id)=>{
	console.log('deleteFarm: [DELETE] /farms/');
	try {
		try {
			const farm = await Farm.destroy({where: {id: id}});
			console.log('Ok deleteFarm: ', {farm});
			return (farm);
		} catch (error) {
			console.log('Error in deleteFarm: ' + 'Farm: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//* Get a single FARM
const getFarm = async (id)=>{
	console.log('getFarm: [GET] /farms/');
	try {
		try {
			const farm = await Farm.findOne({where: {id: id}});
			console.log('Ok getFarm: ', {farm});
			return (farm);
		} catch (error) {
			console.log('Error in getFarm: ' + 'Farm: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};






module.exports = {
	createFarm,
	getAllFarms,
	updateFarm,
	deleteFarm,
	getFarm
};
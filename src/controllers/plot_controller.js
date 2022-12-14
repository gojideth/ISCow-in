const plotService = require('../services/plot_service');

/**
 * CRUD CONTROLLERS
 * */

//!* POST[/plots/create] Create a single PLOT
const createPlot = async(req, res)=>{
	console.log('createPlot: [POST] /plots/create');
	try {
		const plot = await plotService.createPlot(req.body);
		console.log('body: ', req.body);
		if(plot.error){
			return res.status(400).json({' Bad Request': plot.error});
		}
		return res.status(200).json({'Message': 'Plot created', 'Plot': plot});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//!* GET[/plots/] Get all PLOTS
const getAllPlots = async(req, res)=>{
	console.log('getAllPlots: [GET] /plots/');
	try {
		const plots = await plotService.getAllPlots();
		if(plots.error){
			return res.status(400).json({error: plots.error});
		}
		return res.status(200).json({plots});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};
//!* PUT[/plots/update] Update a single PLOT	
const updatePlot = async(req, res)=>{
	console.log('updatePlot: [PUT] /plots/update');
	try {
		const plot = await plotService.updatePlot(req.body, req.params.id);
		console.log('body: ', req.body);
		if(plot.error){
			return res.status(400).json({' Bad Request': plot.error});
		}
		return res.status(200).json({'Message': 'Plot updated', 'Plot': plot});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//!* DELETE[/plots/delete] Delete a single PLOT
const deletePlot = async(req, res)=>{
	console.log('deletePlot: [DELETE] /plots/delete');
	try {
		const plot = await plotService.deletePlot(req.params.id);
		console.log('body: ', req.body);
		if(plot.error){
			return res.status(400).json({' Bad Request': plot.error});
		}
		return res.status(200).json({'Message': 'Plot deleted', 'Plot': plot});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//!* GET[/plots/:id] Get a single PLOT
const getPlot = async(req, res)=>{
	console.log('getPlot: [GET] /plots/:id');
	try {
		const plot = await plotService.getPlot(req.params.id);
		if(plot.error){
			return res.status(400).json({error: plot.error});
		}
		return res.status(200).json({plot});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//!* GET[/farm/plot/] Get all numbers PLOTS from a farm
const getNumberPlots = async(req, res)=>{
	console.log('getFarmPlots: [GET] /farm/plot/');
	try {
		const plots = await plotService.getNumberOfPlotsByFarmId(req.params.id);
		if(plots.error){
			return res.status(400).json({error: plots.error});
		}
		return res.status(200).json({plots});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//!*GET[/plots/plot/:id] Get a single PLOT by plotId
const getPlotByPlotId = async(req, res)=>{
	console.log('getPlotByPlotId: [GET] /plots/plot/:id');
	try {
		const plot = await plotService.getPlotById(req.params.id);
		if(plot.error){
			return res.status(400).json({error: plot.error});
		}
		return res.status(200).json({plot});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//*GET[/plots/Farm/:id] Get all plots from a farm
const getPlotsByFarmId = async(req, res)=>{
	console.log('getPlotsByFarmId: [GET] /plots/Farm/:id');
	try {
		const plots = await plotService.getAllPlotsByFarmId(req.params.id);
		if(plots.error){
			return res.status(400).json({error: plots.error});
		}
		return res.status(200).json({plots});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};


module.exports = {
	createPlot,
	getAllPlots,
	updatePlot,
	deletePlot,
	getPlot,
	getNumberPlots,
	getPlotByPlotId,
	getPlotsByFarmId
};
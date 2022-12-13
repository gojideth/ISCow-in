const Plot = require('../models/plot');

/**
 * !CRUD Controllers
 * */

//*Create a single PLOT
const createPlot = async(plot)=>{
	console.log('createPlot: [POST] /plots/');
	console.log('plot : ', plot);
	try {
		const PLOT_MODEL = {
			plot_number: plot.plot_number,
			plot_size: plot.plot_size,
			plot_status: plot.plot_status,
			farm_id: plot.farm_id
		};
		try {
			const plot = await Plot.create(PLOT_MODEL);
			console.log('Ok createPlot: ', {plot});
			return (plot);
		} catch (error) {
			console.log('Error in createPlot: ' + 'Plot: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Get all PLOTS
const getAllPlots = async ()=>{
	console.log('getAllPlots: [GET] /plots/');
	try {
		const allPlots = await Plot.findAll();
		console.log('OK getAllPlots: ', allPlots.map(plots => plots.dataValues));
		return allPlots;
	} catch (error) {
		console.log('Error in getAllPlots ' + 'Plots:', error
		);
		return error;
	}
};

//*Update a single PLOT
const updatePlot = async (plot, id)=>{
	console.log('updatePlot: [PUT] /plots/');
	console.log('plot : ', plot);
	try {
		const PLOT_MODEL = {
			plot_number: plot.plot_number,
			plot_size: plot.plot_size,
			plot_status: plot.plot_status,
			farm_id: plot.farm_id
		};

		try {
			const plot = await Plot.update(PLOT_MODEL, {where: {id: id}});
			console.log('Ok updatePlot: ', {plot});
			return (plot);
		} catch (error) {
			console.log('Error in updatePlot: ' + 'Plot: ', error);
			return {error: error};
		}
	}
	catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Delete a single PLOT
const deletePlot = async (id)=>{
	console.log('deletePlot: [DELETE] /plots/');
	try {
		const plot = await Plot.destroy({where: {id: id}});
		console.log('Ok deletePlot: ', {plot});
		return (plot);
	} catch (error) {
		console.log('Error in deletePlot: ' + 'Plot: ', error);
		return {error: error};
	}
};

//*Get all PLOTS by farm_id
const getAllPlotsByFarmId = async (id)=>{
	console.log('getAllPlotsByFarmId: [GET] /farm/plot/');
	try {
		const allPlots = await Plot.count({where: {farm_id: id}});
		console.log('OK getAllPlotsByFarmId: ', allPlots);
		return allPlots;
	} catch (error) {
		console.log('Error in getAllPlotsByFarmId ' + 'Plots:', error
		);
		return error;
	}
};

//*Get a single PLOT by id
const getPlotById = async (id)=>{
	console.log('getPlotById: [GET] /plots/');
	try {
		const plot = await Plot.findOne({where: {id: id}});
		console.log('OK getPlotById: ', plot.dataValues);
		return plot;
	} catch (error) {
		console.log('Error in getPlotById ' + 'Plots:', error
		);
		return error;
	}
};



module.exports = {
	createPlot,
	getAllPlots,
	updatePlot,
	deletePlot,
	getAllPlotsByFarmId,
	getPlotById
};






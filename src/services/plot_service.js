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
			name: plot.name,
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
const updatePlot = async (plotData, id)=>{
	console.log('updatePlot: [PUT] /plots/');
	console.log('plot : ', plotData);
	try {
		const PLOT_MODEL = {
			plot_name : plotData.plot_name,
			plot_location : plotData.plot_location,
			plot_size : plotData.plot_size
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

module.exports = {
	createPlot,
	getAllPlots,
	updatePlot,
	deletePlot
};






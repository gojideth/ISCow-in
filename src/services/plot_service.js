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

module.exports = {
	createPlot,
	getAllPlots,
	updatePlot,
	deletePlot
};






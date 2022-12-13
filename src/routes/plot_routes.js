const controller = require('../controllers/plot_controller');
const express = require('express');
const router = express.Router();

//CRUD Model-Agnostic.
//Keep them at the end of the route file for url parsing requests
router.get('/', controller.getAllPlots);
router.post('/create', controller.createPlot);
router.put('/:id', controller.updatePlot);
router.delete('/:id', controller.deletePlot);
router.get('/:id', controller.getPlot);
// Get plots number by farm_id
router.get('/number/:id', controller.getNumberPlots);
// Get plots by farm_id
router.get('/farm/:id', controller.getPlotsByFarmId);



module.exports = router;
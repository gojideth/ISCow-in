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
router.get('/number/:id', controller.getNumberPlots);

module.exports = router;
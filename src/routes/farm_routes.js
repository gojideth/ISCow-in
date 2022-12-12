const controller = require('../controllers/farm_controller');
const express = require('express');
const router = express.Router();

//CRUD Model-Agnostic.
//Keep them at the end of the route file for url parsing requests
router.get('/', controller.getAllFarms);
router.post('/create', controller.createFarm);
router.put('/:id', controller.updateFarm);
router.delete('/:id', controller.deleteFarm);
router.get('/:id', controller.getFarmById);
//* Get all plots from a single farm
router.get('/number/:id', controller.getFarmPlots);
//*Get all farms from a single person
router.get('/person/:id', controller.getFarmsByUser);

module.exports = router;

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

module.exports = router;
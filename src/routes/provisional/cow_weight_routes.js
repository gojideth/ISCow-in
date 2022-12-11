const controller = require('../../controllers/cow_weight_controller');
const express = require('express');
const router = express.Router();

//CRUD Model-Agnostic.
//Keep them at the end of the route file for url parsing requests
router.get('/', controller.getAllCowWeights);
router.post('/create', controller.createCowWeight);
router.put('/:id', controller.updateCowWeight);
router.delete('/:id', controller.deleteCowWeight);
router.get('/:id', controller.getCowWeight);

module.exports = router;
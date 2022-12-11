const controller = require('../../controllers/cow_vaccine_controller');

const express = require('express');
const router = express.Router();

//CRUD Model-Agnostic.
//Keep them at the end of the route file for url parsing requests
router.get('/', controller.getAllCowVaccines);
router.post('/create', controller.createCowVaccine);
router.put('/:id', controller.updateCowVaccine);
router.delete('/:id', controller.deleteCowVaccine);
router.get('/:id', controller.getCowVaccine);

module.exports = router;

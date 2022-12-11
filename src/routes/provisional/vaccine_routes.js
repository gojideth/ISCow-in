const controller = require('../../controllers/vaccine_controller');
const express = require('express');
const router = express.Router();

//CRUD Model-Agnostic.
//Keep them at the end of the route file for url parsing requests
router.get('/', controller.getAllVaccines);
router.post('/create', controller.createVaccine);
router.put('/:id', controller.updateVaccine);
router.delete('/:id', controller.deleteVaccine);
router.get('/:id', controller.getVaccine);

module.exports = router;
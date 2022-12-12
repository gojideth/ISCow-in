const controller = require('../../controllers/cow_controller');
const express = require('express');
const router = express.Router();

//CRUD Model-Agnostic.
//Keep them at the end of the route file for url parsing requests
router.get('/', controller.getAllCows);
router.post('/create', controller.createCow);
router.put('/:id', controller.updateCow);
router.delete('/:id', controller.deleteCow);
router.get('/:id', controller.getCow);
router.get('/number/:id', controller.getCowCountByPlot);

module.exports = router;

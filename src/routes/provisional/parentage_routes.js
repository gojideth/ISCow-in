const controller = require('../../controllers/parentage_controller');
const express = require('express');
const router = express.Router();

//CRUD Model-Agnostic.
//Keep them at the end of the route file for url parsing requests
router.get('/', controller.getAllParentages);
router.post('/create', controller.createParentage);
router.put('/:id', controller.updateParentage);
router.delete('/:id', controller.deleteParentage);
router.get('/:id', controller.getParentage);

module.exports = router;
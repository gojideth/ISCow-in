const controller = require('../../controllers/check_controller');

const express = require('express');
const router = express.Router();

//CRUD Model-Agnostic.
//Keep them at the end of the route file for url parsing requests
router.get('/', controller.getAllChecks);
router.post('/create', controller.createCheck);
router.put('/:id', controller.updateCheck);
router.delete('/:id', controller.deleteCheck);
router.get('/:id', controller.getCheck);

module.exports = router;
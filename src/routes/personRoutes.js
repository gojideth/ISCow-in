const controller = require('../controllers/personController');
const express = require('express');
const router = express.Router();

//CRUD Model-Agnostic. 
//Keep them at the end of the route file for url parsing requests
router.get('/', controller.getAllPersons);
//router.get('/:id', controller.getOne());
router.post('/create', controller.createPerson);
//router.put('/:id', controller.updateOne());
//router.delete('/:id', controller.deleteOne());

module.exports = router;
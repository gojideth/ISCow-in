const controller = require('../controllers/person_controller');
const express = require('express');
const router = express.Router();

//CRUD Model-Agnostic. 
//Keep them at the end of the route file for url parsing requests
router.get('/', controller.getAllPersons);
router.post('/create', controller.createPerson);
router.put('/:id', controller.updatePerson);
router.delete('/:id', controller.deletePerson);
router.post('/login', controller.login);

module.exports = router;
const controller = require('../controllers/person');
const router = require('express').Router();

//CRUD Model-Agnostic. 
//Keep them at the end of the route file for url parsing requests
router
	.get('/', controller.getAllPersons())
	.get('/:id', controller.getOne)
	.post('/', controller.createOne())
	.put('/:id', controller.updateOne)
	.delete('/:id', controller.deleteOne);

module.exports = router;
const personService = require('../services/personService');

/**
 * CRUD CONTROLLERS
*/

//!* POST[/persons/create] Create a single PERSON
const createPerson = async(req, res)=>{
	console.log('createPerson: [POST] /persons/create');
	try {
		const user = await personService.createUser(req.body);
		if(user.error){
			return res.status(400).json({error: user.error});
		}
		return res.status(200).json({user});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

//!* GET[/persons/] Get all PERSONS
const getAllPersons = async(req, res)=>{
	console.log('getAllPersons: [GET] /persons/');
	try {
		const persons = await personService.getAllPersons();
		if(persons.error){
			return res.status(400).json({error: persons.error});
		}
		return res.status(200).json({persons});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};


module.exports = {
	createPerson,
	getAllPersons
};

//TODO Missing the getOnePerson, updatePerson and deletePerson


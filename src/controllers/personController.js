const personService = require('../services/personService');

/**
 * CRUD CONTROLLERS
*/

//!* POST[/persons/create] Create a single PERSON
const createPerson = async(req, res)=>{
	console.log('createPerson: [POST] /persons/create');
	console.log('Xd test');
	try {
		const person = await personService.createPerson(req.body);
		console.log('body: ', req.body);
		if(person.error){
			return res.status(400).json({error: person.error});
		}
		return res.status(200).json({person: person});
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


const personService = require('../services/person_service');

/**
 * CRUD CONTROLLERS
*/

//!* POST[/persons/create] Create a single PERSON
const createPerson = async(req, res)=>{
	console.log('createPerson: [POST] /persons/create');
	try {
		const person = await personService.createPerson(req.body);
		console.log('body: ', req.body);
		if(person.error){
			return res.status(400).json({' Bad Request': person.error});
		}
		return res.status(200).json({'Message': 'Person created', 'Person': person});
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

const updatePerson = async(req, res)=>{
	console.log('updatePerson: [PUT] /persons/update');
	try {
		const person = await personService.updatePerson(req.body, req.params.id);
		console.log('body: ', req.body);
		if(person.error){
			return res.status(400).json({' Bad Request': person.error});
		}
		return res.status(200).json({'Message': 'Person updated', 'Person': person});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

const deletePerson = async(req, res)=>{
	console.log('deletePerson: [DELETE] /persons/delete');
	try {
		const person = await personService.deletePerson(req.params.id);
		console.log('body: ', req.body);
		if(person.error){
			return res.status(400).json({' Bad Request': person.error});
		}
		return res.status(200).json({'Message': 'Person deleted', 'Person': person});
	} catch (error) {
		return res.status(400).json({error: 'Bad Request'});
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({
				error: 'Username and password are required'
			});
		}
		const user = await personService.login(email, password);
		return res.status(200).json({'Login': 'Success', 'User': user });
	} catch (err) {
		return res.status(500).json({
			error: 'Failed to login user'
		});
	}
};

module.exports = {
	createPerson,
	getAllPersons,
	updatePerson,
	deletePerson,
	login
};



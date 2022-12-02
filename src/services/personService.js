const Person = require('../models/person');

/**
 * !CRUD Controllers
 */

//*Create a single USER
const createPerson = async(user)=>{
	console.log('createPerson: [POST] /persons/');
	try {
		const PERSON_MODEL = {
			name: user.name,
			email: user.email,
			last_name: user.email
		};
		try {
			const person = await Person.create(PERSON_MODEL);
			console.log('Ok createPerson: ', {person});
			return {person};
		} catch (error) {
			console.log('Error in createPerson: ' + 'Person: ', error);
			return {error};
		}
	} catch (error) {
		return {error: 'Bad Request'};
	}
};

const getAllPersons = async ()=>{
	console.log('getAllPersons: [GET] /persons/');
	try {
		const allPersons = await Person.findAll();
		console.log('OK getAllPersons: ', allPersons.map(persons => persons.dataValues));
		return allPersons;
	} catch (error) {
		console.log('Error in getAllPersons ' + 'Persons:', error);
		return error;
	}
};



module.exports = {
	createPerson,
	getAllPersons
};
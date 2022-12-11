const Person = require('../models/person');

/**
 * !CRUD Controllers
 */

//*Create a single PERSON
const createPerson = async(person)=>{
	console.log('createPerson: [POST] /persons/');
	console.log('person : ', person);
	try {
		const PERSON_MODEL = {
			name: person.name,
			email: person.email,
			last_name: person.last_name,
			is_admin: person.is_admin,
			password: person.password
		};
		try {
			const person = await Person.create(PERSON_MODEL);
			console.log('Ok createPerson: ', {person});
			return (person);
		} catch (error) {
			console.log('Error in createPerson: ' + 'Person: ', error);
			return {error: error};
		}
	} catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Get all PERSONS
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

//*Update a single PERSON
const updatePerson = async (personData, id)=>{
	console.log('updatePerson: [PUT] /persons/');
	console.log('person : ', personData);
	try {
		const PERSON_MODEL = {
			name: personData.name,
			email: personData.email,
			last_name: personData.last_name,
			is_admin: personData.is_admin,
			password: personData.password
		};
		try {
			const person = await Person.update(PERSON_MODEL, {where: {id: id}});
			console.log('Ok updatePerson: ', {person});
			return (person);
		} catch (error) {
			console.log('Error in updatePerson: ' + 'Person: ', error);
			return {error: error};
		}
	} catch (error) {
		return {error: 'Bad Request'};
	}
};

//*Delete a single PERSON
const deletePerson = async (id)=>{
	console.log('deletePerson: [DELETE] /persons/:id');
	console.log('personId : ', id);
	try {
		const User = await Person.destroy({where: {id}});
		console.log('Ok deletePerson: ', {User});
		return (User);
	} catch (error) {
		console.log('Error in deletePerson: ' + 'Person: ', error);
		return {error: error};
	}
};



module.exports = {
	createPerson,
	getAllPersons,
	updatePerson,
	deletePerson
};
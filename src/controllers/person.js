const Person = require('../models/person');

/**
 * CRUD CONTROLLERS
 */


//Create a single USER
//TODO Create a services layer to separate the services in the controllers
exports.createOne = async (req,res)=>{
	console.log('createPerson: [POST] /persons/');
	try {
		const PERSON_MODEL = {
			name: req.body.name,
			email: req.body.email,
			last_name: req.body.email
		};
		try {
			const person = await Person.create(PERSON_MODEL);
			console.log('Ok createPerson: ', person);
			return res.status(200).json(person);
		} catch (error) {
			console.log('Error in createPerson: ' + 'Person: ', error);
			return res.status(500).json(error);
		}
	} catch (error) {
		return res.status(400).json('Bad Request');
	}
};

exports.getAllPersons = async (req,res)=>{
	console.log('getAllPersons: [GET] /persons/');
	try {
		const allPersons = await Person.findAll();
		console.log('OK getAllPersons: ', allPersons.map(persons => persons.dataValues));
		return res.status(200).json(allPersons);
	} catch (error) {
		console.log('Error in getAllPersons ' + 'Persons:', error);
		res.status(400).json(error);				
	}
};

//TODO Missing the getOnePerson, updatePerson and deletePerson


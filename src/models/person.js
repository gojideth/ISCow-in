const Sequelize = require('sequelize');
const db = require('../util/db');

const Person = db.define(
	'persons',
	{
		id:{
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		name:{
			type: Sequelize.STRING,
			allowNull: false			
		},
		email:{
			type: Sequelize.STRING,
			unique: true,
			allowNull: false
		},
		last_name:{
			type: Sequelize.STRING,
			allowNull: false
		}
		
	});

module.exports = Person;

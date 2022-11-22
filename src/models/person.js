const Sequelize = require('sequelize');
const db = require('../util/db');

const Person = db.define(
	'cows',
	{
		id:{
			type: Sequelize.UUID,
			autoIncrement: true,
			allowNull: false,
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

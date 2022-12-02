const Sequelize = require('sequelize');
const db = require('../util/db');

const Person = db.define(
	'persons',
	{
		id:{
			type: Sequelize.DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
			default: Sequelize.fn('uuid_generate_v4')
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

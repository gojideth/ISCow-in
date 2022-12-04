const Sequelize = require('sequelize');
const db = require('../util/db');
const bcrypt = require('bcrypt');
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
			allowNull: false,
			validate:{
				isEmail: true
			}
		},
		last_name:{
			type: Sequelize.STRING,
			allowNull: false
		},
		is_admin:{
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		password:{
			type: Sequelize.STRING,
			allowNull: false
		},
		
	},{
		hooks:{
			beforeCreate: async  (person) => {
				const salt = await bcrypt.genSalt(10,'a');
				person.password = bcrypt.hashSync(person.password, salt);
			},
			beforeUpdate: async (person) => {
				const salt = await bcrypt.genSalt(10,'a');
				person.password = bcrypt.hashSync(person.password, salt);
			}
		}
	}
);

module.exports = Person;

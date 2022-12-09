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
			allowNull: true,
			defaultValue: false
		},
		password:{
			type: Sequelize.STRING,
			allowNull: true
		}		
	},{		
		freezeTableName: true,
		hooks: {
			beforeCreate: async (user) => {
				if (user.password) {
					const salt = await bcrypt.genSaltSync(10, 'a');
					user.password = bcrypt.hashSync(user.password, salt);
				}
			}	
		}
	}
);

module.exports = Person;

const sequelize = require('sequelize');
const db = require('../util/db');
const Cow = db.define(
	'cows',
	{
		id:{
			type: sequelize.UUID,
			defaultValue: sequelize.UUIDV4,
			primaryKey: true
		},
		race:{
			type: sequelize.STRING,
			allowNull: false			
		},
		born_date:{
			type: sequelize.DATE,
			allowNull: false
		},
		gender:{
			type: sequelize.STRING,
			allowNull: false
		},
		origin:{
			type: sequelize.STRING,
			allowNull: true
		}
	}
);

module.exports = Cow;
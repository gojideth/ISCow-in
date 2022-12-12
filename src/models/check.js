const sequelize = require('sequelize');
const db = require('../util/db');
const Check = db.define(
	'checks',
	{
		id:{
			type: sequelize.UUID,
			defaultValue: sequelize.UUIDV4,
			primaryKey: true
		},
		check_date:{
			type: sequelize.DATE,
			allowNull: false
		},
		notes:{
			type: sequelize.STRING,
			allowNull: true
		},
		is_vaccinated:{
			type: sequelize.BOOLEAN,
			allowNull: false
		},
		is_dewormed:{
			type: sequelize.BOOLEAN,
			allowNull: false
		},
	}
);

module.exports = Check;

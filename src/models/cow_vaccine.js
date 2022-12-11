const sequelize = require('sequelize');
const db = require('../util/db');

const CowVaccine = db.define(
	'cows_vaccine',
	{
		id:{
			type: sequelize.UUID,
			defaultValue: sequelize.UUIDV4,
			primaryKey: true
		},
		vaccine_date:{
			type: sequelize.DATE,
			allowNull: false
		}
	}
);


module.exports = CowVaccine;

const sequelize = require('sequelize');
const db = require('../util/db');
const Checks = require('./check');

const Cow_vaccine = db.define(
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

Cow_vaccine.hasMany(Checks, {foreignKey: 'cow_vaccine_id'});

module.exports = Cow_vaccine;

const sequelize = require('sequelize');
const db = require('../util/db');
const Cow_vaccine = require('./cow_vaccine');
const Vaccine = db.define(
	'vaccines',
	{
		id:{
			type: sequelize.UUID,
			defaultValue: sequelize.UUIDV4,
			primaryKey: true
		},
		vaccine_name:{
			type: sequelize.STRING,
			allowNull: false
		},
	}
);

Vaccine.hasMany(Cow_vaccine, {foreignKey: 'vaccine_id'});

module.exports = Vaccine;
const sequelize = require('sequelize');
const db = require('../util/db');
const Check = require('./check');
const Vaccine = require('./vaccine');

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

//CowVaccine.belongsTo(Check, {foreignKey: 'cow_vaccines_id'});
CowVaccine.hasMany(Vaccine, {foreignKey: 'check_id'});

module.exports = CowVaccine;

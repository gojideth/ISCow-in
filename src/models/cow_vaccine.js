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

CowVaccine.belongsTo(Check, {foreignKey: 'check_id'});
CowVaccine.belongsTo(Vaccine, {foreignKey: 'vaccine_id'});

module.exports = CowVaccine;

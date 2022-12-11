const sequelize = require('sequelize');
const db = require('../util/db');

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

module.exports = Vaccine;
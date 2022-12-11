const sequelize = require('sequelize');
const db = require('../util/db');
const Cow_weight = db.define(
	'cows_weight',
	{
		id:{
			type: sequelize.UUID,
			defaultValue: sequelize.UUIDV4,
			primaryKey: true
		},
		weight_date:{
			type: sequelize.DATE,
			allowNull: false
		},
		weight:{
			type: sequelize.FLOAT,
			allowNull: false
		}
	}
);

module.exports = Cow_weight;
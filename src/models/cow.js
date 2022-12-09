const sequelize = require('sequelize');
const db = require('../util/db');
const Checks = require('./check');
const Parentage = require('./parentage');
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
			type: sequelize.BOOLEAN,
			allowNull: false
		},
		origin:{
			type: sequelize.STRING,
			allowNull: true
		}
	}
);

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





//* Relationship

Cow.hasMany(Cow_weight, {foreignKey: 'cow_id'});

Cow.hasMany(Checks, {foreignKey: 'cow_id'});

Cow.hasMany(Parentage, {foreignKey: 'cow_id'});

module.exports = Cow;
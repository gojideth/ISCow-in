const sequelize = require('sequelize');
const db = require('../util/db');
const Cow = require('./cow');
const Parentage = db.define(
	'parentages',
	{
		id:{
			type: sequelize.UUID,
			defaultValue: sequelize.UUIDV4,
			primaryKey: true
		},
		parent_id:{
			type: sequelize.UUID,
			allowNull: false
		}
	}
);

Parentage.hasMany(Cow, {foreignKey: 'parentage_id'});

module.exports = Parentage;
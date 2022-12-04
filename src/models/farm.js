const Sequelize = require('sequelize');
const db = require('../util/db');

const Farm = db.define(
	'farms',
	{
		id:{
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		farm_name:{
			type: Sequelize.STRING,
			allowNull: false
		},
		farm_location:{
			type: Sequelize.STRING,
			allowNull: false
		},
		farm_size:{
			type: Sequelize.INTEGER,
			allowNull: false
		},
	}
);

module.exports = Farm;

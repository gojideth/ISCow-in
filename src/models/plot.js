const sequelize = require('sequelize');
const db = require('../util/db');
const Cow = require('./cow');
const Plot = db.define(
	'plots',
	{
		id:{
			type: sequelize.UUID,
			defaultValue: sequelize.UUIDV4,
			primaryKey: true
		},
		plot_number:{
			type: sequelize.STRING,
			allowNull: false
		},
		plot_size:{
			type: sequelize.STRING,
			allowNull: false
		},		
		plot_status:{
			type: sequelize.STRING,
			allowNull: false
		}
	}
);

Plot.hasMany(Cow, {foreignKey: 'plot_id'});
module.exports = Plot;
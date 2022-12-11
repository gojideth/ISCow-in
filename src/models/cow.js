const sequelize = require('sequelize');
const db = require('../util/db');
const Plot = require('./plot');
const Cow_weight = require('./cow_weight');
const CowVaccine = require('./cow_vaccine');
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
			type: sequelize.STRING,
			allowNull: false
		},
		origin:{
			type: sequelize.STRING,
			allowNull: true
		}
	}
);
Plot.hasMany(Cow, {foreignKey: 'plot_id'});
Cow.belongsTo(Plot, {foreignKey: 'plot_id'});

Cow.hasMany(Cow_weight, {foreignKey: 'cow_id'});
Cow_weight.belongsTo(Cow, {foreignKey: 'cow_id'});

Cow.hasMany(CowVaccine, {foreignKey: 'cow_id'});

Cow.hasMany(Parentage, {foreignKey: 'cow_id'});
Parentage.belongsTo(Cow, {foreignKey: 'cow_id'});

module.exports = Cow;
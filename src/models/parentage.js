const sequelize = require('sequelize');
const db = require('../util/db');

const Parentage = db.define(
	'parentages',
	{
		id:{
			type: sequelize.UUID,
			defaultValue: sequelize.UUIDV4,
			primaryKey: true
		}
	}
);



module.exports = Parentage;
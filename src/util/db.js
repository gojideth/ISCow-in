const Sequelize = require('sequelize');
const process = require('process');

const sequelize = new Sequelize(
	process.env.PGDATABASE || 'db_cows',
	process.env.PGUSER || 'admin',
	process.env.PGPASSWORD || 'xark123',
	{
		host: process.env.PSQL_HOST,
		dialect: 'postgres',
	}
);

module.exports = sequelize;
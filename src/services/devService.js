const packageJSON = require('../../package.json');

const getPackageJson = () => {
	return packageJSON;
};

const getVersion = () => {
	return packageJSON.version;
};

const getSequelizeVersion = () => {
	return packageJSON.dependencies.sequelize;
};

module.exports = {
	getPackageJson,
	getVersion,
	getSequelizeVersion
};
const devService = require('../services/devService');
const sequelize = require('../config/sequelize');
// [GET] ../dev/config
const getConfig = (req,res)=>{
	console.log('getConfig: [GET] /dev/config');
	const config = devService.getPackageJson();
	res.send({ status: 'OK', data: config });

};

//[GET] ../dev/version
const getVersion = (req,res)=>{
	const version = devService.getVersion();
	res.status(200).json({'npm ISCOW-in version ': version});
};

//[GET] ../dev/seq 
const getSequelizeVersion = async (req, res, next) =>{
	try {
		await sequelize.authenticate();
		console.log('Sequelize Connection established');
		res.status(200).json({'Sequelize Connection creds' : devService.getSequelizeVersion()});
		next();
	} catch (error) {
		next(error);
	}
};

module.exports = 
{
	getConfig,
	getVersion,
	getSequelizeVersion
};
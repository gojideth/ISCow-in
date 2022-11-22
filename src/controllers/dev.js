const packJson = require('../../package.json');
const sequelize = require('../util/db');

// [GET] ../dev/config
exports.getConfig = (req,res)=>{
	return res.status(200).json({packJson});
};

//[GET] ../dev/version
exports.getVersion = (req,res)=>{
	return res.status(200).json({'npm ISCOW-in version ': packJson.version});
};

//[GET] ../dev/seq 
exports.seq = async (req, res, next) =>{
	try {
		await sequelize.authenticate();
		console.log('Sequelize Connection established');
		res.status(200).json({'Sequelize Connection creds' : 'TestTin'});
		next();
	} catch (error) {
		next(error);
	}
};

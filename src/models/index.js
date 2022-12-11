const Check = require('./check');
const Cow_vaccine = require('./cow_vaccine');
const Cow_weight = require('./cow_weight');
const Cow = require('./cow');
const Farm = require('./farm');
const Parentage = require('./parentage');
const Person = require('./person');
const Plot = require('./plot');
const Vaccine = require('./vaccine');
const { Model } = require('sequelize');

//Relations	
//*Person has many Farms (1:M)
Person.hasMany(Model.Farm, { foreignKey: 'person_id' });
Farm.belongsTo(Model.tableName, { foreignKey: 'person_id' });

//*Farm has many Plots (1:M)
Farm.hasMany(Plot, { foreignKey: 'farm_id' });
Plot.belongsTo(Farm, { foreignKey: 'farm_id' }); 

//*Plot has many Cows (1:M)
Plot.hasMany(Cow, { foreignKey: 'plot_id' });
Cow.belongsTo(Plot, { foreignKey: 'plot_id' });

//*Cow has many Parentages (1:M)
Cow.hasMany(Parentage, { foreignKey: 'cow_id' });
Parentage.belongsTo(Cow, { foreignKey: 'cow_id' });

//*Cow has many Cow_weights (1:M)
Cow.hasMany(Cow_weight, { foreignKey: 'cow_id' });
Cow_weight.belongsTo(Cow, { foreignKey: 'cow_id' });

//*Cow has many checks (1:M)
Cow.hasMany(Check, { foreignKey: 'cow_id' });
Check.belongsTo(Cow, { foreignKey: 'cow_id' });

//*Check has many Cow_vaccines (1:M)
Check.hasMany(Cow_vaccine, { foreignKey: 'check_id' });
Cow_vaccine.belongsTo(Cow, { foreignKey: 'check_id' });

//*Cow_vaccine has many Vaccines (1:M)
Cow_vaccine.hasMany(Vaccine, { foreignKey: 'cow_vaccine_id' });
Vaccine.belongsTo(Cow_vaccine, { foreignKey: 'cow_vaccine_id' });

module.exports = {
	Check,
	Cow_vaccine,
	Cow_weight,
	Cow,
	Farm,
	Parentage,
	Person,
	Plot,
	Vaccine
};

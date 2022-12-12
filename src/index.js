const express = require('express');

const bodyParser = require('body-parser');

const sequelize = require('./util/db');

const app = express();

const process = require('process');

const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors(
	{
		origin : '*',
	}
));

//Set headers to allow cross origin resource sharing
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

//?Router for the API
app.use('/api', require('./routes/dev_routes'));

//*PERSONS
app.use('/persons', require('./routes/person_routes'));

//*FARMS
app.use('/farms', require('./routes/farm_routes'));

//*PLOTS	
app.use('/plots', require('./routes/plot_routes'));

//*COWS
app.use('/cows', require('./routes/provisional/cow_routes'));

//*CHECKS
app.use('/checks', require('./routes/provisional/check_routes'));

//*COW_VACCINES
app.use('/cow_vaccines', require('./routes/provisional/cow_vaccine_routes'));

//*VACCINES
app.use('/vaccines', require('./routes/provisional/vaccine_routes'));

//*COW_WEIGHTS
app.use('/cow_weights', require('./routes/provisional/cow_weight_routes'));

//*PARENTAGE	
app.use('/parentage', require('./routes/provisional/parentage_routes'));

(async () => {
	try {
		await sequelize.sync(
			{ force: false} //Reset db every time
		);
		console.log('Listening on PORT: ' + process.env.EXTERNAL_PORT);
		app.listen(process.env.EXTERNAL_PORT); //DEF in docker.compose.yml
	} catch (error) {
		console.log(error);
	}
})();
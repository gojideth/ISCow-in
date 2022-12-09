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
		origin : 'http://127.0.0.1:5500',
	}
));

//Set headers to allow cross origin resource sharing
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

//Router (sample routes, while we export the routes from the controllers)
app.use('/api', require('./routes/devRoutes'));
app.use('/persons', require('./routes/personRoutes'));


(async () => {
	try {
		await sequelize.sync(
			{ force: true} //Reset db every time
		);
		console.log('Listening on PORT: ' + process.env.EXTERNAL_PORT);
		app.listen(process.env.EXTERNAL_PORT); //DEF in docker.compose.yml
	} catch (error) {
		console.log(error);
	}
})();
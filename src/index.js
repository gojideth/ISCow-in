const express = require('express');

const bodyParser = require('body-parser');

const sequelize = require('./util/db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set headers to allow cross origin resource sharing
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

//Router (sample routes, while we export the routes from the controllers)
app.use('/api', require('./routes/dev'));
app.use('/persons', require('./routes/person'));


(async () => {
	try {
		await sequelize.sync(
			{ force: false} //Reset db every time
		);
		app.listen(process.env.EXTERNAL_PORT); //DEF in docker.compose.yml
	} catch (error) {
		console.log(error);
	}
})();
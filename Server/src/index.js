const express = require('express');
const server = express();
const PORT = 3001;
const routes = require('./routes/index');
//const server = require('./app')
const { conn } = require('./DB_connection');

server.use(express.json());

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

server.use('/rickandmorty', routes);

server.listen(PORT, async () => {
	await conn.sync({ force: true });
	console.log(`Server raised in port ${PORT}`);
});

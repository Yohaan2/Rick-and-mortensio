const express = require('express');
const server = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes/index');
//const server = require('./app')
const { conn } = require('./DB_connection');
const path = require('path');

server.use(express.json());

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
app.use(express.static(path.resolve(__dirname, '../client/build')));

server.use('/rickandmorty', routes);

server.listen(PORT, async () => {
	await conn.sync({ force: true });
	console.log(`Server raised in port ${PORT}`);
});

const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const login = require('../src/utils/users');

describe('GET /rickandmorty/character/:id', () => {
	it('Responde con status: 200', async () => {
		const response = await agent.get('/rickandmorty/character/1');
		expect(response.statusCode).toEqual(200);
	});
	it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image', async () => {
		const response = await agent.get('/rickandmorty/character/1');

		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('name');
		expect(response.body).toHaveProperty('species');
		expect(response.body).toHaveProperty('gender');
		expect(response.body).toHaveProperty('status');
		expect(response.body).toHaveProperty('origin');
		expect(response.body).toHaveProperty('image');
	});
	it('Si hay un error responde con status: 500', async () => {
		const response = await agent.get('/rickandmorty/character/1000');
		expect(response.statusCode).toEqual(500);
	});
});
describe('GET /rickandmorty/login', () => {
	it('Verifica si cuando pasas los datos correctos access sea igual a true ', async () => {
		const response = await agent.get(
			'/rickandmorty/login?email=garciayohan57@gmail.com&password=123456'
		);
		expect(response.body).toEqual({ access: true });
		console.log(response.body);
	});
	it('Debe enviar un objeto con el access en false cuando son incorrectos los datos', async () => {
		const response = await agent.get(
			'/rickandmorty/login?email=garciaysdohan@gmail.com&password=1234sd56'
		);
		expect(response.body).toEqual({ access: false });
	});
});

describe('POST /rickandmorty/fav', ()=>{
   it('lo que envies por body debe ser envuelto en un arreglo', async ()=>{
      const response = await agent.post('/rickandmorty/fav');
      
   })
});
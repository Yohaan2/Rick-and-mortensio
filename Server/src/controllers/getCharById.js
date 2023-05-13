const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await axios(`${URL}${id}`);
		const { name, gender, species, origin, image, status } = response.data;
		const obj = {
			id: id,
			name,
			gender,
			species,
			origin: origin.name,
			image,
			status,
		};
		if (obj) {
			return res.status(200).json(obj);
		}
		return res.status(404).send('Not Found');
      
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getCharById,
};

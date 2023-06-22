const { Favorite } = require('../DB_connection')


const postFav = async (req, res) => {
try {
   const { id, name, origin, status, image, species, gender } = req.body;

   //if(![id, name, origin, status, image, species, gender].every(Boolean)) res.status(401).send('Faltan datos')
if (!id || !name || !status || !species || !gender || !origin || !image) return res.status(401).send('Faltan datos');
	
	
   await Favorite.findOrCreate({
		where: {
			id,
			name,
			origin,
			status,
			image,
			species,
			gender,
		},
	});
   const allFavorite = await Favorite.findAll()
   res.status(200).json(allFavorite)
   
} catch (error) {
   res.status(500).json({ error: error.message})
}

};

module.exports = { postFav }

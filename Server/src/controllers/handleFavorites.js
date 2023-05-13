let myFavorites = [];

const postFav = (req, res) => {
	myFavorites.push(req.body);
	return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
	const { id } = req.params;

	myFavorites = myFavorites.filter((user) => user.id !== id)  // piso a myfavorites para actulizar la base de datos

	return res.status(200).json(myFavorites);
};

module.exports = {
	postFav,
	deleteFav,
};

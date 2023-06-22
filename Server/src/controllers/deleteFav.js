const { Favorite } = require('../DB_connection');

const deleteFav = async(req, res) => {
   try {
      const { id } = req.params
      // const user = await Favorite.destroy({
      //    where:{id}
         
      // })
      const userDelete = await Favorite.findByPk(id);
		userDelete.destroy();
   
      const allFavorite = await Favorite.findAll()
      return res.status(200).json(allFavorite)
      
   } catch (error) {
      res.status(500).json( { error: error.message} )
   }
}




module.exports = { deleteFav };

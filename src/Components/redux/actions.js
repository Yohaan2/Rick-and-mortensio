export const types = {
	ADD_FAV: 'ADD_FAV',
	REMOVE_FAV: 'REMOVE_FAV',
   FILTER: 'FILTER',
   ORDER: 'ORDER'
};


export const addFav = (personaje) => {
   return {
      type: types.ADD_FAV,
      payload: personaje
   }
}

export const removeFav = (id)  => {
   return {
      type: types.REMOVE_FAV,
      payload: id
   }
}

export const filteredCards = (gender) => {
   return {
      type: types.FILTER,
      payload: gender
   }
}

export const orderCards = (orden) => {
   return {
      type: types.ORDER, 
      payload: orden
   }
}
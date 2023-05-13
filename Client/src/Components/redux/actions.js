import axios from 'axios'

export const types = {
	ADD_FAV: 'ADD_FAV',
	REMOVE_FAV: 'REMOVE_FAV',
   FILTER: 'FILTER',
   ORDER: 'ORDER'
};


export const addFav = (character) => {
	try {
		const endpoint = 'http://localhost:3001/rickandmorty/fav';
	return async (dispatch) => {
		const response = await axios.post(endpoint, character)
		const {data} = response
			return dispatch({
				type: types.ADD_FAV,
				payload: data,
			});
	};
	} catch (error) {
		return { error: error.message };
	}
	
};

export const removeFav = (id) => {
	try {
		const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
	return async (dispatch) => {
		const response = await axios.delete(endpoint)
		const { data } = response
			return dispatch({
				type: types.REMOVE_FAV,
				payload: data,
			});
	};
	} catch (error) {
		return { error: error.message };
	}
	
};

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
import { types } from './actions';

const initialState = {
	myFavorites: [],
	allCharacters: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_FAV:
			return {
				...state,
				myFavorites: [...state.allCharacters, action.payload],
				allCharacters: [...state.allCharacters, action.payload]
			};
		case types.REMOVE_FAV:
			const filtered = state.myFavorites.filter((character) => {
            return character.id !== Number(action.payload)
         })
      
      return {
				...state,
				myFavorites: filtered
				
			};
		case types.FILTER:
			return{
				...state,
				myFavorites: state.allCharacters.filter(character => character.gender === action.payload)
			}
		case types.ORDER:
			const copycharacter = [...state.allCharacters]
		
			return {
				...state,
				myFavorites: 
				action.payload === 'A' ? copycharacter.sort((a,b) => a.id - b.id) : copycharacter.sort((a,b )=> b.id - a.id)
			}

		default:
			return {
				...state,
			};
	}
};

export default reducer;

import { types } from './actions';

const initialState = {
	myFavorites: [],
	allCharacters: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_FAV':
			return {
				...state,
				myFavorites: action.payload,
				allCharacters: action.payload,
			};

		case 'REMOVE_FAV':
			return { ...state, myFavorites: action.payload };
		
			case types.FILTER:
			return {
				...state,
				myFavorites: state.allCharacters.filter(
					(character) => character.gender === action.payload
				),
			};
		case types.ORDER:
			const copycharacter = [...state.allCharacters];

			return {
				...state,
				myFavorites:
					action.payload === 'A'
						? copycharacter.sort((a, b) => a.id - b.id)
						: copycharacter.sort((a, b) => b.id - a.id),
			};

		default:
			return {
				...state,
			};
	}
};

export default reducer;

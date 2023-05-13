import { connect } from 'react-redux';
import Card from '../Card/Card';
import { filteredCards, orderCards } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import style from './Favorites.module.css';

const Favorites = ({ myFavorites }) => {
	const dispatch = useDispatch();

	const handleOrder = (e) => {
		dispatch(orderCards(e.target.value));
		setAux(true);
	};

	const handleFilter = (e) => {
		dispatch(filteredCards(e.target.value));
	};

	const [aux, setAux] = useState(false);

	return (
		<div className={style.container}>
			<div className={style.filter}>
				<select onChange={handleOrder}>
					<option value='A'>Ascendente</option>
					<option value='D'>Descendente</option>
				</select>
				<i></i>

				<select onChange={handleFilter}>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
					<option value='Genderless'>Genderless</option>
					<option value='unknown'>unknown</option>
				</select>
			</div>
			<div className={style.card}>
				{myFavorites.map((p) => {
					return (
						<Card
							key={p.id}
							id={p.id}
							name={p.name}
							status={p.status}
							species={p.species}
							gender={p.gender}
							origin={p.origin?.name}
							image={p.image}
						/>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};
export default connect(mapStateToProps, null)(Favorites);

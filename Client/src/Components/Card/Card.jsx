import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import style from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AiTwotoneHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

const Card = (props) => {
	const {
		name,
		status,
		species,
		gender,
		origin,
		image,
		onClose,
		id,
		addFav,
		removeFav,
		myFavorites,
	} = props;

	const { pathname } = useLocation();
	console.log(typeof pathname);

	const [isFav, setIsFav] = useState(false);

	const handleFavorite = () => {
		isFav ? removeFav(id) : addFav(props);
		setIsFav(!isFav);
	};

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === props.id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);

	return (
		<div className={style.container}>
			{isFav ? (
				<div onClick={handleFavorite} className={style.btnHeart}>
					<AiTwotoneHeart className={style.heart2} />
				</div>
			) : (
				<div onClick={handleFavorite} className={style.btnHeart}>
					<AiOutlineHeart className={style.heart1} />
				</div>
			)}

			{pathname === '/favorites' ? null : (
				<button onClick={() => onClose(id)} className={style.btn}>
					X
				</button>
			)}
			<NavLink to={`/detail/${id}`} className={style.link}>
				<h2 className={style.h2}>{name}</h2>
			</NavLink>
			<div className={style.describe}>
				<h2 className={style.h2}>{status}</h2>
				<h2 className={style.h2}>{species}</h2>
				<h2 className={style.h2}>{gender}</h2>
				<h2 className={style.h2}>{origin}</h2>
				<img className={style.img} src={image} alt={name} />
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		addFav: (personaje) => dispatch(addFav(personaje)),
		removeFav: (id) => dispatch(removeFav(id)),
	};
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

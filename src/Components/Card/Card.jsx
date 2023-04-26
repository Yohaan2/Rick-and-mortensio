import style from './Card.module.css';
import { NavLink } from 'react-router-dom';

const Card = ({ name, status, species, gender, origin, image, onClose, id }) =>  {
	
	return (
		<div className={style.container}>
			<button onClick={() => onClose(id)} 
			className={style.btn}>
				X
			</button>
			<NavLink to={`/detail/${id}`}>
				<h2 className={style.h2}>{name}</h2>
			</NavLink>
			<h2 className={style.h2}>{status}</h2>
			<h2 className={style.h2}>{species}</h2>
			<h2 className={style.h2}>{gender}</h2>
			<h2 className={style.h2}>{origin.name}</h2>
			<img className={style.img} src={image} alt='Hola' />
		</div>
	);
}

export default Card

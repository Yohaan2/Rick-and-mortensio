import style from './SearchBar.module.css';
import { useState } from 'react';
import logo from '../../image/Rick_and_Morty.svg.png';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
	const [id, setId] = useState('');

	const handleChange = (event) => {
		setId(event.target.value);
		console.log(event.target.value);
	};

	return (
		<>
			<div className={style.container}>
				<Link to={'/home'}>
					<img src={logo} alt='logo de rick' className={style.logo} />
				</Link>
				<div className={style.search}>
					<input
						type='search'
						placeholder='Elige tu personaje'
						className={style.input}
						onChange={handleChange}
						value={id}
					/>

					<button onClick={() => onSearch(id)} className={style.boton}>
						<ImSearch className={style.lupa} />
					</button>
				</div>
			</div>
		</>
	);
};
// value={id} />
// onChange={() => handleChange(id)} />

export default SearchBar;
// para recibir parametros en una funcion que esta dentro de un event loop, se crea una callback

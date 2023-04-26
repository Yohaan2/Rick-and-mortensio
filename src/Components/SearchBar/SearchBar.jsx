import style from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
	const [id, setId] = useState('');

	const handleChange = (event) => {
		setId(event.target.value);
		console.log(event.target.value);
	};

	return (
		<div className={style.search}>
			<input
				type='search'
				placeholder='Busca tu personaje'
				className={style.input}
				onChange={handleChange}
				value={id}
			/>

			<button onClick={() => onSearch(id)} className={style.boton}>
				Agregar
			</button>
		</div>
	);
};
// value={id} />
// onChange={() => handleChange(id)} />

export default SearchBar;
// para recibir parametros en una funcion que esta dentro de un event loop, se crea una callback

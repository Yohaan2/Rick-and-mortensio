import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css';

const Detail = () => {
	const { id } = useParams();

	const [character, setCharacter] = useState({});

	useEffect(() => {
		axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
			if (data.name) {
				setCharacter(data);
			} else {
				window.alert('No hay personajes con ese ID');
			}
		});
		return setCharacter({});
	}, [id]);

	return (
		<>
			<h1>Details Character</h1>
			{character ? (
				<div className={style.container}>
					<div className={style.fondo}>
						<div className={style.detail}>
							<h2>Name: {character.name}</h2>
							<h2>Status: {character.status}</h2>
							<h2>Specie: {character.species}</h2>
							<h2>Gender: {character.gender}</h2>
							<h2>Origin: {character.origin}</h2>
						</div>
						<img src={character.image} alt={character.name} className={style.logo} />
					</div>
				</div>
			) : (
				<h1>Cargando...</h1>
			)}
		</>
	);
};

export default Detail;

import './App.css';
import Cards from './Components/Cards/Cards.jsx';
import Nav from './Components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './Components/About/about';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
import Favorites from './Components/Favorites/Favorites';

function App() {
	const [characters, setCharacters] = useState([]);
	console.log('soy el estado', characters);

	const [access, setAccess] = useState(false);

	const EMAIL = 'garciayohan57@gmail.com';
	const PASSWORD = '1234';
	const navigate = useNavigate();

	const { pathname } = useLocation();

	function onSearch(id) {
		axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
			if (data.name) {
				const filetred = characters.filter((character) => {
					return character.name === data.name;
				});
				if (filetred.length === 0) {
					setCharacters((characters) => [...characters, data]);
				} else {
					window.alert('Ya este personaje existe');
				}
			} else {
				window.alert('¡No hay personajes con este ID!');
			}
		});
	}

	const login = (userData) => {
		if (userData.password === PASSWORD && userData.email === EMAIL) {
			setAccess(true);
			navigate('/home');
		}
	};

	const logout = () => {
		setAccess(false)
		navigate('/')
	}

	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	const onClose = (id) => {
		setCharacters(characters.filter((characters) => characters.id !== Number(id)));
	};

	return (
		<div className='App'>
			{pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}

			<Routes>
				<Route path='/' element={<Form login={login} />} />
				<Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
				<Route path='/about' element={<About />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/favorites' element={<Favorites />}/>
			</Routes>
		</div>
	);
}

export default App;

//uselocation es un objetoç
//wadsdaw asd adaw dasda wd awdda sd asda wd asda wdw dad
//1234567890'¡qwertyuiop``+KBKJBasdfghjklñ´´ç1!!<<>zxcvbnm,.-789456123-+*/-.,mººª\.0

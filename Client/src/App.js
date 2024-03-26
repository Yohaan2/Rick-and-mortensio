import './App.css';
import Cards from './Components/Cards/Cards';
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
	const navigate = useNavigate();

	const { pathname } = useLocation();

	const onSearch = async (id) => {
		try {
			const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
			const { data } = response;
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
		} catch (error) {
			return { error: error.message };
		}
	};

	const login = async (userData) => {
		try {
			const { email, password } = userData;
			const URL = 'http://localhost:3001/rickandmorty/login';
			const response = await axios(URL + `?email=${email}&password=${password}`);
			const { data } = response;
			const { access } = data;

			setAccess(access);
			access && navigate('/home');
		} catch (error) {
			return { error: error.message };
		}
	};

	const logout = () => {
		setAccess(false);
		navigate('/');
	};

	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	const onClose = (id) => {
		setCharacters(characters.filter((characters) => characters.id !== id));
	};

	return (
		<div className='App'>
			{pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}

			<Routes>
				<Route path='/' element={<Form login={login} />} />
				<Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
				<Route path='/about' element={<About />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</div>
	);
}

export default App;

//uselocation es un objetoç
//wadsdaw asd adaw dasda wd awdda sd asda wd asda wdw dad
//1234567890'¡qwertyuiop``+KBKJBasdfghjklñ´´ç1!!<<>zxcvbnm,.-789456123-+*/-.,mººª\.0

import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo-tranparente.png';

const Nav = ({ onSearch, logout }) => {
	return (
		<nav>
			<NavLink to={'/about'}>
				<button>About</button>
			</NavLink>
			<NavLink to={'/home'}>
				<button>Home</button>
			</NavLink>
			<NavLink to={'/favorites'}>
				<button>Favorites</button>
			</NavLink>
		
				<button onClick={logout}>Log Out</button>
			
			<div className='container-logo'>
				<img src={logo} alt='logo de rick' />
			</div>
			<SearchBar onSearch={onSearch} />
		</nav>
	);
};

export default Nav;

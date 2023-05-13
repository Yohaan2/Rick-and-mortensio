import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdOutlineFavorite } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { BsFillFilePersonFill } from 'react-icons/bs';
import style from './Nav.module.css';

const Nav = ({ onSearch, logout }) => {
	return (
		<nav>
			<div className={style.nav}>
				<div className={style.btnLeft}>
					<NavLink to={'/home'} className={style.link}>
						<button className={style.btn}>
							<HiHome className={style.home} />
						</button>
					</NavLink>

					<NavLink to={'/favorites'} className={style.link}>
						<button className={style.btn}>
							<MdOutlineFavorite className={style.favorites} />
						</button>
					</NavLink>

					<NavLink to={'/about'} className={style.link}>
						<button className={style.btn}>
							<BsFillFilePersonFill className={style.about} />
						</button>
					</NavLink>
				</div>
				<SearchBar onSearch={onSearch} />
				<div className={style.btnRigth}>
					<button onClick={logout} className={style.btn}>
						<FiLogOut className={style.logout} />
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

import { useState } from 'react';
import validate from './Validate';
import style from './Form.module.css';
import logo from '../../image/Rick_and_Morty.svg.png';

const Form = ({ login }) => {
	const [userData, setUserdata] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		setUserdata({
			...userData,
			//email
			//password anterior
			[event.target.name]: event.target.value,
		});
		setErrors(
			validate({
				...userData,
				[event.target.name]: event.target.value,
			})
		);
	};

	const handleSubtmit = (event) => {
		event.preventDefault();
		login(userData);
	};

	const [errors, setErrors] = useState({});

	return (
		<div className={style.containForm}>
			<form onSubmit={handleSubtmit} className={style.containInput}>
				<img src={logo} alt='logo de rick and morty' className={style.logo} />
				<label className={style.labelE}>Email</label>
				<input
					type='email'
					placeholder='Correo Electronico'
					value={userData.email}
					onChange={handleChange}
					name='email'
					className={style.email}
					//autoComplete='off'
				/>
				{errors.email ? (
					<p>{errors.email}</p>
				) : errors.emailVacio ? (
					<p>{errors.emailVacio}</p>
				) : (
					<p>{errors.caracteres}</p>
				)}
				<label className={style.labelP}>Password</label>
				<input
					type='password'
					placeholder='Contraseña'
					value={userData.password}
					onChange={handleChange}
					name='password'
					className={style.password}
				/>
				{errors.password && <p>{errors.password}</p>}
				<br />
				<button type='submit' className={style.boton}>
					Siguiente
				</button>
			</form>
		</div>
	);
};

export default Form;

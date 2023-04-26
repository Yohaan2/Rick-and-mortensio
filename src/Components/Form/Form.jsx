import { useState } from "react";
import validate from './Validate'



const Form = ({login}) => {
	
   const [ userData, setUserdata ] = useState({
      email: '',
      password:''
   })
	
   const handleChange = (event) => {
      setUserdata({
         ...userData,
         //email
         //password anterior
         [event.target.name]: event.target.value
      })
      setErrors(
			validate({
				...userData,
				[event.target.name]: event.target.value
			})
		);
   }

   const handleSubtmit = (event) => {
      event.preventDefault()
         login(userData)
   }

   const [ errors, setErrors] = useState({})

   return (
		<>
			<form onSubmit={handleSubtmit}>
				<label>Email</label>
				<input
					type='email'
					placeholder='Email'
					value={userData.email}
					onChange={handleChange}
					name='email'
				/>
				{errors.email ? (
					<p>{errors.email}</p>
				) : errors.emailVacio ? (
					<p>{errors.emailVacio}</p>
				) : (
					<p>{errors.caracteres}</p>
				)}

				<label>Password</label>
				<input
					type='password'
					placeholder='Password'
					value={userData.password}
					onChange={handleChange}
					name='password'
				/>
				{errors.email ? (
					<p>{errors.password}</p>
				) : errors.emailVacio ? (
					<p>{errors.emailVacio}</p>
				) : (
					<p>{errors.caracteres}</p>
				)}

				<button type='submit'>Submit</button>
			</form>
		</>
	);
};

export default Form;


const validate = (data) => {
   const emailRegex = new RegExp(/^[^@]+@[^@]+.[a-zA-Z]{2,}$/);
   const passwordRegexp = new RegExp(/^(?=.\d)/)
   const passLengthRegex = new RegExp(/.{6,10}$/)
	let errors = {}

	if (!emailRegex.test(data.email)) {
		errors.email = 'Debe ingresar un email valido';
	}
   if(!data.email){
      errors.emailVacio = 'Debes ingresar un email'
   }
   if(data.email.length > 35){
      errors.caracteres = 'Debes ser un email menor a 35 caracteres'
   }
   if(!passwordRegexp.test(data.password)){
      errors.password = 'la contraseña tiene que tener al menos un número';
   
   }
   if (!passLengthRegex.test(data.password)){
      errors.password = 'Tiene que ser entre 6 y 10 caracteres'
   }
   
   return errors;

};

export default validate;

const users = require('../utils/users')


const login = (req, res) =>{
   const {email, password} = req.query
   let access = {access: false}
   console.log(email, password);

   users.forEach(user =>{
      if(user.email === email && user.password === password){
         console.log(user.email, user.password);
         access.access = true
      }
   })
   return res.status(200).json(access)
   // const validation = users.filter(user => user.email === email && user.password === password)
   // if(validation.legth > 0){
   //    return res.status(200).json({access: true})
   // }
   // return res.status(200).json({access: false})
}

module.exports = {
   login
}

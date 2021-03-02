const cookieParser = require('cookie-parser');
const session = require('express-session');
const {user} = require('../database/models')

module.exports=  
 async function  cookieCheck (req, res,next){ 
      if(!req.session.user && req.cookies.user){
        const users= await user.findAll()
       const  usuario =await users.find((user)=>{
          user.id == req.cookies.user
  
          return user

        })
       usuario? req.session.user = usuario : next()

      }
      return next()
  }
    
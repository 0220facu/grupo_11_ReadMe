const cookieParser = require('cookie-parser');
const session = require('express-session');
const readJSON = require('../helpers/ReadJSON')
module.exports=  
  function  cookieCheck (req, res,next){ 
      if(!req.session.user && req.cookies.user){
        const users= readJSON()
       const  usuario =users.find((user)=>{
          user.id == req.cookies.user
  
          return user

        })
       usuario? req.session.user = usuario : next()

      }
      return next()
  }
    
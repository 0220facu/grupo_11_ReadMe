const session = require('express-session');
const readJSON = require('../helpers/ReadJSON')
 
module.exports= function sessionUser(req,res,next){
    res.locals.userLog = false
    if(req.session.user){
     res.locals.userLog = req.session.user
    }
    return next()
}

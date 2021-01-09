const fs = require( "fs");
const path = require( "path");
const {validationResult} = require('express-validator')
const bcryptjs =require('bcryptjs')
const {book , user, category} = require('../database/models')

function getAllusers(){
	const usersFilePath = path.join(__dirname, '../data/usuarios.json');
    return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
}
function writeusers(userToSave){
	const usersToStringify = JSON.stringify(userToSave, null, ' ');
	return fs.writeFileSync('./data/usuarios.json', usersToStringify);
	
}

function generateNewId(){
	const users = getAllusers();
	return users.pop().id + 1;
}


const controller={
    login: (req, res) => {
        res.render('iniciarSesion')
    },
register: (req, res) => {
        res.render('registrarse')
    },
  crear: async(req , res) => {
  
  
    const errors = validationResult(req)
     if (!errors.isEmpty()){
         res.render('registrarse', {errors: errors.errors})
         return
     }
   const  hashedPassword = bcryptjs.hashSync(req.body.password, 5)
    

    const newUser = await user.create({
    name: req.body.name,
    birth_date: req.body.birth_date,
    adress : req.body.adress,
    image : req.files[0].filename,
    email: req.body.email,
    username: req.body.username,
    password : hashedPassword,})
return res.redirect('/');
},
ingresar:(req,res)=>{
    const users = getAllusers();
    const usuarioLogeado  = users.find((usuario)=> {
        return usuario.email == req.body.username
     })
     const errors = validationResult(req)
    
     if (!errors.isEmpty()){
         res.render('iniciarSesion', {errors: errors.errors})
         return
     }
     req.session.user = usuarioLogeado;
     if(req.body.remember){
        res.cookie('user', usuarioLogeado.id, {maxAge: 900000})
        
    
}
console.log(req.session.user)
res.redirect('/')
},
logout:(req,res)=>{
    req.session.destroy()
    res.cookie('user', null, {maxAge: -1})
    return res.redirect('/');
}
}
module.exports = controller;
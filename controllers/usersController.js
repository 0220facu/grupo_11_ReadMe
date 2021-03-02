
const {validationResult} = require('express-validator')
const bcryptjs =require('bcryptjs')
const {book , user, category} = require('../database/models')


const controller={
    login: (req, res) => {
        res.render('iniciarSesion')
    },
register:async (req, res) => {

    const categories = await category.findAll()
        res.render('registrarse',{categories})
    },
  crear: async(req , res) => {
  
  
    const errors = validationResult(req)
    const categoriesDB = await category.findAll()
     if (!errors.isEmpty()){
         res.render('registrarse', {errors: errors.errors , categories: categoriesDB})
         return
     }
   const  hashedPassword = bcryptjs.hashSync(req.body.password, 5)
    
const categories =req.body.categories
    const newUser = await user.create({
    name: req.body.name,
    birth_date: req.body.birth_date,
    adress : req.body.adress,
    image : req.files[0].filename,
    email: req.body.email,
    username: req.body.username,
    password : hashedPassword,})
    
   await newUser.setCategories(categories)
    return res.redirect('/');
},
ingresar:async(req,res)=>{
    const users = await user.findAll();
    const usuarioLogeado  =await users.find((usuario)=> {
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

res.redirect('/')
},
logout:(req,res)=>{
    req.session.destroy()
    res.cookie('user', null, {maxAge: -1})
    return res.redirect('/');
}
}
module.exports = controller;
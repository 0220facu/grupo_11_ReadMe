const { body } = require('express-validator');
const path = require('path')
const bcryptjs =require('bcryptjs')
const {user} = require('../database/models')
module.exports={
    register:[
        body('username')
        .isLength({ min: 4 })
        .withMessage('su nombre de usuario debe tener minimo 4 caracteres')
        .bail()
        .notEmpty()
        .withMessage('Debe ingresar un nombre de usuario')
        .bail(),
        body('birth_date')
        .notEmpty()
        .withMessage('Debe ingresar una fecha de nacimiento')
        .bail(),
        body('name')
        .isLength({ min: 2 })
        .withMessage('su nombre es obligatorio y debe tener minimo 2 caracteres')
        .bail(),
        body('email')
        .notEmpty()
        .withMessage('el campo email no puede quedar vacío')
        .bail()
        .isEmail()
        .withMessage('Debe ingresar un email valido')
        .bail()
        .custom(emailValue => {
            return user.findOne({
                where: {
                    email: emailValue
                }
            })
            .then(user =>{
                if(user){
                    return Promise.reject('Email registrado');
                }
            })
        }),     
        body('email2')
        .custom((value,{ req })=> {return value ==req.body.email})
        .notEmpty()
        .withMessage('Debe ingresar una fecha de nacimiento'),  
        body('password')
            .notEmpty()
            .withMessage('el campo password no puede quedar vacío')
            .bail()
            .isLength({ min: 8 })
            .withMessage('la contraseña debe tener al menos 8 caracteres')
            .bail()
            .custom((value,{ req })=> value == req.body.password_2)
            .withMessage('las contraseñas no coinciden'),
        body('password_2')
        .notEmpty()
            .withMessage('debes repetir la contraseña'),
        body('picture')
        .custom((valueImg, { req }) => req.files[0])
        .withMessage('debes ingresar una imagen de perfil')
        .bail()
        .custom((value , { req })=>{
            const extencionesAceptadas = ['.png', '.jpg', '.jpeg']
            const extencion = path.extname(req.files[0].originalname);
            return extencionesAceptadas.includes(extencion)
        
          })
          .withMessage('extención no valida')],
    login:[
        body('password')
        .notEmpty()
        .withMessage('el campo password no puede quedar vacio')
        .bail(),
        body('username')
        .notEmpty()
        .withMessage('el campo email no puede quedar vacio')
        .bail()
        .custom((value, { req }) =>{
            return user.findOne({
                where: {
                    email: value
                }
            })
            .then(user => {
                if(!user || !bcryptjs.compareSync(req.body.password, user.password)){
                    return Promise.reject('El email y la contraseña no coinciden');
                }
            })
        } )
        
        .withMessage('usuario o contraseña incorrectos')
       
    ],
Create:[
    body('titulo')
    .isLength({ min: 4 })
        .withMessage('el titulo del libro debe tener minimo 5 caracteres')
        .bail(),
    body('sinopsis')
    .isLength({ min: 20 })
        .withMessage('la descripción del libro debe tener minimo 20 caracteres')
        .bail(),
    body('img')
    .custom((valueImg, { req }) => req.files[0])
        .withMessage('debes ingresar una imagen de perfil')
        .bail()
    .custom((value , { req })=>{
        const extencionesAceptadas = ['.png', '.jpg', '.jpeg']
        const extencion = path.extname(req.files[0].originalname);
        return extencionesAceptadas.includes(extencion)
    
      })
      .withMessage('extención no valida'),
],
Edit:[
    body('titulo')
    .isLength({ min: 4 })
        .withMessage('el titulo del libro debe tener minimo 5 caracteres')
        .bail(),
    body('sinopsis')
    .isLength({ min: 20 })
        .withMessage('la descripción del libro debe tener minimo 20 caracteres')
        .bail()
]
}

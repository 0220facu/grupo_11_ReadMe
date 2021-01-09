const { body } = require('express-validator');
const readJSON = require('../helpers/readJSON');
const path = require('path')
const bcryptjs =require('bcryptjs')

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
        .notEmpty()
        .withMessage('Debe ingresar un nombre')
        .bail(),
        body('email')
        .notEmpty()
        .withMessage('el campo email no puede quedar vacío')
        .bail()
        .isEmail()
        .withMessage('Debe ingresar un email valido')
        .bail()
        .custom(emailValue => {
            const users = readJSON();
            const userFound = users.find(user => user.email == emailValue)
            return !userFound
        })     
        .withMessage('este email ya se encuentra registrado'),
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
        .custom((value, { req }) => {
        const users = readJSON()
        const userFound = users.find(user => user.email == value)
        return bcryptjs.compareSync(req.body.password, userFound.contraseña)}
        )
        .withMessage('usuario o contraseña incorrectos')
       
    ]
}

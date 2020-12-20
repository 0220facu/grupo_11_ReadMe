const { body } = require('express-validator');
const readJSON = require('../helpers/readJSON');
const path = require('path')
const bcryptjs =require('bcryptjs')

module.exports={
    register:[
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
            body('password')
            .notEmpty()
            .withMessage('el campo password no puede quedar vacío')
            .bail()
            .isLength({ min: 8 })
            .withMessage('la contraseña debe tener al menos 8 caracteres')
            .bail()
            .custom((value,{ req })=> value == req.body.retype)
            .withMessage('las contraseñas no coinciden'),
        body('retype')
        .notEmpty()
            .withMessage('debes repetir la contraseña'),
        body('avatar')
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
    login:[
        body('password')
        .notEmpty()
        .withMessage('el campo password no puede quedar vacio')
        .bail(),
        body('email')
        .notEmpty()
        .withMessage('el campo email no puede quedar vacio')
        .bail()
        .custom((value, { req }) => {
        const users = readJSON()
        const userFound = users.find(user => user.email == value)
        return  bcryptjs.compareSync(req.body.password, userFound.password)}
        )
        .withMessage('usuario o contraseña incorrectos')
       
    ]
}

var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../public/images/fotos_de_perfil')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })

  const upload = multer({ storage: storage })


router.get('/login',usersController.login );

router.post('/login',usersController.ingresar );

router.get('/register',usersController.register );

router.post('/register',upload.any(),usersController.crear );

module.exports = router;


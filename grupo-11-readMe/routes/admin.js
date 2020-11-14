var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })

  const upload = multer({ storage: storage })

router.get('/',adminController.crear);
router.get('/edit/:id',adminController.editar);
router.post('/edit/:id',adminController.modificar);
router.post('/crear',upload.any(), adminController.subir);

module.exports = router;
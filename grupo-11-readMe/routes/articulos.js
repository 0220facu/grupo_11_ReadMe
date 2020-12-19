var express = require('express');
var router = express.Router();
const articuloController = require('../controllers/articuloController');
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

  

router.get('/',articuloController.crear);
router.get('/edit/:id',articuloController.editar);
router.put('/edit/:id',articuloController.modificar);
router.post('/crear',upload.any(), articuloController.subir);
router.delete('/delete/:id',articuloController.eliminar);
router.get('/:id',articuloController.articulo);
module.exports = router;    
var express = require('express');
var router = express.Router();
const articuloController = require('../controllers/articuloController');
const multer  = require('multer');
const validator = require('../middelwares/validator');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })

  const upload = multer({ storage: storage })

  

router.get('/',upload.any(),articuloController.crear);
router.get('/edit/:id',upload.any(),articuloController.editar);
router.put('/edit/:id',upload.any(),validator.Edit,articuloController.modificar);
router.post('/crear',upload.any(),validator.Create, articuloController.subir);
router.delete('/delete/:id',articuloController.eliminar);
router.get('/:id',articuloController.articulo);
module.exports = router;    
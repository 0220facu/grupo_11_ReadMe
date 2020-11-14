var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/',adminController.crear);
router.get('/edit/:id',adminController.editar);
router.post('/edit/:id',adminController.modificar);
router.post('/crear',adminController.subir);

module.exports = router;
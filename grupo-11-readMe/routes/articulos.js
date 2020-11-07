var express = require('express');
var router = express.Router();
const articuloController = require('../controllers/articuloController');

router.get('/:id',articuloController.articulo);

module.exports = router;
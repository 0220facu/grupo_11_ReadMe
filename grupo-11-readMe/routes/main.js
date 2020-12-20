var express = require('express');
var router = express.Router();
const mainController = require('../controllers/MainController');
const auth = require( '../middelwares/auth')

/* GET home page. */
router.get('/',mainController.index);
router.get('/carrito', auth ,  mainController.carrito);


module.exports = router;

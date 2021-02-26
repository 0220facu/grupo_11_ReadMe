var express = require('express');
var router = express.Router();
var apiController = require ('../../controllers/apiController');

router.post('/checkLogin', apiController.loginValidation);
router.get('/users', apiController.list);
router.get('/users/:id', apiController.detail);

router.get('/products', apiController.products);
router.get('/products/:id', apiController.productDetail);

module.exports =router; 
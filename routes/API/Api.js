var express = require('express');
var router = express.Router();
var apiController = require ('../../controllers/apiController');

router.get('/users', apiController.list);
router.post('/checkLogin', apiController.loginValidation);

module.exports =router; 
var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/',adminController.crear);

module.exports = router;
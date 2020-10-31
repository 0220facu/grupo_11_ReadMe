var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',MainController.index);

module.exports = router;

var express = require('express');
var bookController = require('../controllers/bookController');

var router = express.Router();

router.get('/', bookController.index);

module.exports = router;

var express = require('express');
var user_controller = require('../controllers/userController');

var router = express.Router();

router.get('/', user_controller.indexAction);

module.exports = router;

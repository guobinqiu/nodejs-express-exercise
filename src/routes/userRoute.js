var express = require('express');
var userController = require('../controllers/userController');
var router = express.Router();

router.route('/')
    .get(userController.index)
    .post(userController.create);

router.route('/:id')
    .get(userController.show)
    .put(userController.update)
    .delete(userController.destroy);

module.exports = router;

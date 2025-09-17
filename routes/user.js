'use strict'

let express = require('express');
let router = express.Router();
let userController = require('../controllers/users');


router.post('/api/user/create', userController.createUser);
router.post('/api/user/login', userController.loginUser)

module.exports = router;

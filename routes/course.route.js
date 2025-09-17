'use strict'

let express = require('express');
let router = express.Router();
let courseController = require('../controllers/course.controller');
let token = require('../helpers/auth');

router.post('/api/course', token.validateToken, courseController.createCourse);

module.exports = router;

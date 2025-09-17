'use strict'

let express = require('express');
let bodyParser = require('body-parser');
let coursesRoutes = require('./routes/course.route');
let routerUser = require('./routes/user');
let movieRoutes = require('./routes/movie.route');

let application = express();

application.use(bodyParser.json());
application.use(coursesRoutes);
application.use(routerUser);
application.use(movieRoutes);

module.exports = application;
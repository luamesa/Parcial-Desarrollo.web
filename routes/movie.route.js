'use strict'

let express = require('express');
let movieController = require('../controllers/movie.controller');
let auth =require('../helpers/auth');

let router = express.Router();

router.post('/api/movies/create', auth.validateToken, movieController.createMovie);
router.get('/api/movies/all', auth.validateToken, movieController.getAllMovies);
router.get('/api/movies/search', auth.validateToken, movieController.findMoviesByFilter);

module.exports = router;
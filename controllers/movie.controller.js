'use strict'

let Movie = require('../models/movie.model');

function createMovie(req, res){
    if (req.user.rol !== 'Administtador'){
        return res.status(403).send({ message: 'No estas autorizado para realizar esta accion'});
    }

    let movie = new Movie ({
        
        titulo: req.body.titulo,
        director: req.body.director,
        anoLanzamiento: req.body.anoLanzamiento,
        productora: req.body.productora,
        precio: req.body.precio
    });

    movie.save().then((movieCreated) => {
        res.status(201).send({movie: movieCreated})
    }), 
    err => {
            resp.status(500).send({message: 'Error al guardar la pelicula', error: err});
        }
}

function getAllMovies(req, res){
    
    Movie.find().then((movies) =>{
        if (!movies){
            return res.status(404).send({message: 'No se encontraron peliculas'});
        }
        res.status(200).send({movies: movies});
    }),
    err => {
        res.status(500).send({message: ' Error en la peticion', error: err});
    };
}

function findMoviesByFilter(req, res){
    const ano = req.query.ano;
    const precioMax = req.query.precio;

    if (!ano || !precioMax){
        return res.status(400).send({message: 'Debes proporcionar los parametros "año" y "precio'});
    }
    
    Movie.find({
        
        anoLanzamiento: {$gt: ano},
        precio: {$lte: precioMax}
    }).then((movies) => {
        if (movies.length === 0 ){
            return res.status(400).send({message: 'No se encontraron las peliculas con estos criterios'});
        }
        res.status(200).send({movies: movies});
    }),
    err => {
        res.status(500).send({message: 'Error en la peticion', error: err});
    };
}

module.exports = {
    createMovie,
    getAllMovies,
    findMoviesByFilter
};
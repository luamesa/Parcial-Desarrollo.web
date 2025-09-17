'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MovieSchema = Schema({
    
    titulo: String,
    director: String,
    anoLanzamiento: Number,
    productora: String,
    precio: Number
});

module.exports = mongoose.model('Movie', MovieSchema);
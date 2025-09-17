'use strict'

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let CoursesSchema = Schema({
    name: String,
    duration: Number,
    price: Number
});

module.exports = mongoose.model('cursos', CoursesSchema);

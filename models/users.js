'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    email: String,
    password: String,
    rol: {type: String, default: 'usuario basico'}
});

module.exports = mongoose.model('users', UserSchema);

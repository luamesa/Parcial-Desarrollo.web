'use strict';

let mongoose = require('mongoose');
let application = require('./application');

mongoose.connect('mongodb://localhost:27017/desarrolloweb')
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

application.listen(2708, () => {
    console.log('Servidor corriendo en http://localhost:2708');
});

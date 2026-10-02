'use strict';

require('dotenv').config();

let mongoose = require('mongoose');
let application = require('./application');

let PORT = process.env.PORT || 2708;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

application.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

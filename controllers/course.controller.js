'use strict'

// Correcto
let Course = require('../models/course.model')

function createCourse(req, resp){
    if (!req.body){
        resp.status(400).send({'message': 'El body esta vacio'})
    }
    else if (!req.body.name || !req.body.duration || !req.body.price){
        resp.status(400).send({'message': 'Faltan campos requeridos'})
    }
    else{
        let newCourse = new Course();
        newCourse.name = req.body.name;
        newCourse.duration = req.body.duration;
        newCourse.price = req.body.price;

        newCourse.save().then(
            (createdCourse) => {
                // Exito
                resp.status(200).send({'message': 'Curso creado', 'course': createdCourse });
            },
            err => {
                //error
                resp.status(500).send({'message': 'Error al crear curso, intente de nuevo'});
            }
        );
    }
}

module.exports = {createCourse};
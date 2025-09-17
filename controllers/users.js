'use strict'

let User = require('../models/users');
let token = require('../helpers/auth');
let bcrypt = require('bcryptjs');

function createUser(req, resp){
    let salt = bcrypt.genSaltSync(15);
    let newUser = new User();
    newUser.email = req.body.email;
    newUser.password = bcrypt.hashSync(req.body.password, salt)

    newUser.save().then(
        (userCreated) => {
            resp.status(201).send({'message': 'user created', 'course' : userCreated});
        },
        err =>{
            resp.status(500).send({'message': 'Error', 'error': err});
        }
    );
}

function loginUser(req, resp){
    User.findOne({'email': req.body.email}).then(
        (userFound) => {
            if(userFound == null){
                resp.status(404).send({"message": "User doesnt exist"});
                return;
            }
            if(bcrypt.compareSync(req.body.password, userFound.password)){
                resp.status(200).send({"message": "login ok", "token": token.generateToken(userFound)});
            }
            else {
                resp.status(401).send({"message": "incorrect password"});
            }
        },
        err => {
            resp.status(500).send({'message': 'Error', 'error': err});
        }
    );
}

module.exports = {createUser, loginUser}
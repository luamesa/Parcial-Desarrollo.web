'use strict'

let jwt = require('jwt-simple');
let moment = require ('moment');

let secret = 'Esasfomowemf212##"!sasdwEsas';

function generateToken(user){
    let payload = {
        sub: user._id,
        email: user.email,
        rol: user.rol,
        iat: moment().unix(),
        exp: moment().add('15', 'minutes').unix()
    }

    return jwt.encode(payload, secret);
}

function validateToken(req, resp, nextStep){
    try{
        let userToken = req.headers.authorization;
        let cleanToken = userToken.replace('Bearer ', '');
        let payload = jwt.decode(cleanToken, secret);

        req.user = payload;
        nextStep();
    }
    catch(ex){
        resp.status(403).send({'message': 'invalid token'})
    }
}

module.exports = {generateToken, validateToken};
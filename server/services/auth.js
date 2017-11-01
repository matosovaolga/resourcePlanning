'use strict';

let userModel = require('../models/user'),
        config = require('../config/global.json'),
        customError = require('../helpers/customError'),
        sequelizeHelper = require('../helpers/sequelize'),
        jwt = require('jsonwebtoken');

exports.check = function (req, res, next) {
    if (req.url === '/login' || req.url === '/') {
        return next();
    }

    if (req.session && req.session.logged && req.session.id) {
        return next();
    } else {
        return res.sendStatus(401);
    }
};

exports.login = function (req, res) {
    let pass = req.body.pass;
    let email = req.body.email;
    if (typeof pass === 'undefined' || typeof email === 'undefined') {
        res.status(400);
        res.send('Empty credentials');
        return;
    }

    let query = userModel.defaultQuery(true) + 'where users.login=?';

    sequelizeHelper.query(query, {replacements: [email], type: sequelizeHelper.QueryTypes.SELECT, model: userModel}).then(function(results) {
        if (results) {
            let row = results[0];
            if (row && row.hashPassword(pass, row['salt']) === row['hashed_password']) {
                let token = jwt.sign(row.toJSON(), config.jwtSecret, {expiresIn: '1d'});
                let rowJson = row.toJSON();
                rowJson.token = token;
                rowJson.is_admin = row.isAdmin();
                return res.json(rowJson);
                
            } else {
                res.status(400);
                return res.send('Wrong credentials');
            }
        }
    }).catch(function(err) {
        console.log(err);
        res.send(err);
    });
};

function getLogged(socket) {
    let userData = {};
    if (typeof (socket.handshake.query.token) !== 'undefined') {
        userData = jwt.decode(socket.handshake.query.token);
    }
    return userModel.build(userData);
}

exports.getLogged = getLogged;

//put access logic here
exports.isAllowed = function (packet, socket, next) {
    let action = packet[0],
            user = getLogged(socket);
    
    const adminActions = [
        'plan/create',
        'plan/update',
        'plan/delete'
    ];

    if (adminActions.indexOf(action) !== -1 && user.isAdmin() === false) {
        let err = new customError('You shall not pass!');
        err.send(next);
    } else {
        next();
    }
}

'use strict';

let userModel = require('../models/user'),
    jwt = require('jsonwebtoken');

exports.getLogged = function(socket) {
    var userData = {};
    if (false && typeof(socket.handshake.query.token) !== 'undefined') {
        userData  = jwt.decode(socket.handshake.query.token);
    }
    return userModel.build(userData);
}

'use strict';

let holidayModel = require('../models/holiday');

exports.list = function(data, done) {
    holidayModel.findAll({raw: true}).then(function(results) {
        console.log('Holiday list');
        done(results);
    }).catch(function(err) {
        console.log(err);
        done(err);
    });
};
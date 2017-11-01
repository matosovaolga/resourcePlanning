'use strict';

let projectModel = require('../models/project');

exports.list = function(data, done) {
    projectModel.findAll({raw: true}).then(function(results) {
        console.log('Project list');
        done(results);
    }).catch(function(err) {
        console.log(err);
        done(err);
    });
};
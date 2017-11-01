'use strict';

let sequelizeHelper = require('../helpers/sequelize'),
    groupModel = require('../models/group');

exports.list = function(data, done) {
    let inArray = groupModel.validPlannigGroups.join('","');
    let query = 'select id, lastname as name from users where type="Group" and lastname in ("' + inArray + '")';
    
    sequelizeHelper.query(query, {type: sequelizeHelper.QueryTypes.SELECT }).then(function(results) {
        done(results);
    }).catch(function(err) {
        console.log(err);
        done(err);
    });
};
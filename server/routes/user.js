'use strict';

let userModel = require('../models/user'),
    sequelizeHelper = require('../helpers/sequelize'),
    groupModel = require('../models/group');
    
groupModel.hasOne(userModel, {foreignKey: 'id'});

exports.list = function(data, done) {
    let inArray = groupModel.validPlannigGroups.join('","');
    let query = userModel.defaultQuery() +
        'where users.status=1 and users.type="User" and groups.lastname in("' + inArray + '")';
    sequelizeHelper.query(query, {type: sequelizeHelper.QueryTypes.SELECT}).then(function(results) {
        done(results);
    }).catch(function(err) {
        console.log(err);
        done(err);
    });

};
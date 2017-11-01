'use strict';

const sequelize = require('sequelize'),
    userModel = require('./user'),
    sequelizeHelper = require('../helpers/sequelize');

let group = sequelizeHelper.define('groups_users', {
    group_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    }
}, {
    timestamps: false
});

group.validPlannigGroups = [
    'Backend web team',
    'Frontend team',
    'Mobile team',
    'QA team',
    'PM team',
    'Design and BA',
];

group.adminGroupName = 'Project managers';

//group.hasOne(userModel, {foreignKey: 'id'});

module.exports = group;

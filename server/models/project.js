'use strict';

const sequelize = require('sequelize'),
    sequelizeHelper = require('../helpers/sequelize');

let project = sequelizeHelper.define('projects', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    parent_id: {
        type: sequelize.INTEGER,
        allowNull: true,
    },
    status: {
        type: sequelize.STRING(30),
        allowNull: false,
        default: 1,
    }
}, {
    timestamps: false
});

module.exports = project;

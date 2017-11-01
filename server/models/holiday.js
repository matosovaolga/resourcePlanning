'use strict';

const sequelize = require('sequelize'),
    sequelizeHelper = require('../helpers/sequelize');

let holiday = sequelizeHelper.define('planning_holidays', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    date: {
        type: sequelize.DATE,
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = holiday;

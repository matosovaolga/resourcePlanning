'use strict';

const sequelize = require('sequelize'),
    projectModel = require('./project'),
    sequelizeHelper = require('../helpers/sequelize');

let plan = sequelizeHelper.define('planning', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    project_id: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    start_time: {
        type: sequelize.INTEGER(20),
        allowNull: false,
    },
    end_time: {
        type: sequelize.INTEGER(20),
        allowNull: false,
    },
    percent: {
        type: sequelize.FLOAT,
        allowNull: false,
    },
    note: {
        type: sequelize.STRING(250),
        allowNull: true,
    },
    approved: {
        type: sequelize.INTEGER(1),
        allowNull: false,
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

plan.belongsTo(projectModel, {foreignKey: 'project_id'});

module.exports = plan;

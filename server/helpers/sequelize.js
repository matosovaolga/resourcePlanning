'use strict';

let config = require("../config/db.json");
const sequelize = require('sequelize');

module.exports = new sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: false,
    }
);

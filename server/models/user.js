'use strict';

const sequelize = require('sequelize'),
    sequelizeHelper = require('../helpers/sequelize'),
    groupModel = require('./group'),
    planModel = require('./plan'),
    sha1 = require('sha1');

let user = sequelizeHelper.define('users', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    hashed_password: {
        type: sequelize.STRING(40),
        allowNull: false,
    },
    firstname: {
        type: sequelize.STRING(30),
        allowNull: false,
    },
    lastname: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    admin: {
        type: sequelize.INTEGER(1),
        allowNull: false,
    },
    status: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    group_name: {//user doesn't have this filed so use defaultQuery instead of find methods
        type: sequelize.STRING,
        allowNull: false,
    },
    salt: {
        type: sequelize.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false
});

user.hasOne(groupModel, {foreignKey: 'user_id'});
user.hasOne(planModel, {foreignKey: 'user_id'});
  
user.prototype.isAdmin = function() {
    let groups = this.group_name.split(',');
    let check = groups.indexOf(groupModel.adminGroupName);
    if (check === -1) {
        return false;
    }
    return true;
}

user.prototype.hashPassword = function(pass, salt) {
    return sha1(salt + sha1(pass));
}

/**
 * 
 * @param {boolean|null} allGroups - if true return all groups comma-separated
 * @returns {String}
 */
user.defaultQuery = function(allGroups) {
    
    if (typeof(allGroups) === 'undefined') {
        allGroups = false;
    }
    
    let inArray = groupModel.validPlannigGroups.join('","'),
        filterQuery = '',
        groupField = 'groups.lastname AS group_name ';
    
    if (allGroups) {
        groupField = 'GROUP_CONCAT(groups.lastname) AS group_name ';
    } else {
        filterQuery = ' and groups.lastname in("' + inArray + '")';
    }
    
    return 'select users.*, groups_users.group_id as group_id, ' + groupField +
    'from users ' +
    'left join groups_users on user_id=id ' +
    'left join users as groups on (groups.id = groups_users.group_id ' + filterQuery + ') ';
}

user.groupNamesQuery = 'select groups.lastname from groups_users left join users as groups on groups.id = groups_users.group_id';

module.exports = user;

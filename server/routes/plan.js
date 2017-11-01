'use strict';

let planModel = require('../models/plan'),
    userModel = require('../models/user'),
    projectModel = require('../models/project'),
    customError = require('../helpers/customError'),
    logger = require('../helpers/logger'),
    sequelizeHelper = require('../helpers/sequelize'),
    auth = require('../services/auth');

let getList = function(data, done) {
    let where = {};
    if (data.time_from) {
        where.end_time = {$gte: data.time_from};
    }
    if (data.time_to) {
        where.start_time = {$lte: data.time_to};
    }
    
    planModel.findAll({where: where}).then(function(results) {
        console.log("plans list");
        done(results);
    }).catch(function(err) {
        console.log(err);
        done(err);
    });
};

exports.get = function(data, done) {
    planModel.findById(data.id).then(function(results) {
        done(results);
    }).catch(function(err) {
        console.log(err);
        done(err);
    });
};

exports.list = getList;

exports.create = function(data, done, socket) {
    planModel.create(data).then(function(plan) {
        done(plan);
    }).catch(function(err) {
        done(err);
    });
};

exports.update = function(data, done, socket) {
    planModel.findOne({where: {id: data.id}, include: [projectModel]}).then(function(plan) {
        if (plan) {
            plan.updateAttributes(data).then(function(planUpdated) {
                let query = userModel.defaultQuery() + 'where users.id=' + planUpdated.user_id;
                sequelizeHelper.query(query, {type: sequelizeHelper.QueryTypes.SELECT, model: userModel}).then(function(results) {
                    let user = results[0];
                    logger.editPoject(auth.getLogged(socket), user, plan, planUpdated);
                }).catch(function(err) {
                    console.log(err);
                    done(err);
                });
                done(planUpdated);
            }).catch(function(err) {
                done(err);
            });
        } else {
            let err = new customError('Plan not found');
            err.send(done);
        }
    }).catch(function(err) {
        done(err);
    });
};

exports.delete = function(data, done, socket) {
    planModel.findById(data.id).then(function (plan) {
        if (plan) {
            plan.destroy().then(function() {
                done({deleted: true});
            });
        } else {
            let err = new customError('Plan not found');
            err.send(done);
        }
    }).catch(function (err) {
        done(err);
    });
};

/**
 * emit refreshed list of plans to all users
 * 
 * @param {Object} io - socket.io 
 * @param {Object} currentConnections - list of socket connections
 * 
 */
exports.refreshPlans = function(io, currentConnections) {
    for (let id in currentConnections) {
        let params = currentConnections[id];
        if (params && params.planFilters) {
            getList(params.planFilters, function(data) {
                console.log('emit refresh-plans to ' + id, params.planFilters);
                io.to(id).emit('plan', data);
            });
        }
    }
};


//todo: logging

//todo: save csv
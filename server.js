'use strict';

let express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    request = require('request'),
    jwt = require('jsonwebtoken'),
    socketioJwt = require('socketio-jwt'),
    config = require('./server/config/global.json'),
    path = require("path"),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    user = require('./server/routes/user'),
    project = require('./server/routes/project'),
    plan = require('./server/routes/plan'),
    holiday = require('./server/routes/holiday'),
    group = require('./server/routes/group'),
    auth = require('./server/services/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, '/dist')));
app.use(expressValidator([]));
app.use(auth.check);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.post('/login', auth.login);

app.get('*', function (req, res) {
    res.status(404).body("I don't know what you are looking for O_o 404");
});

io.use(socketioJwt.authorize({
    secret: config.jwtSecret,
    handshake: true
}));

var currentConnections = {};
io.on('connection', function (socket) {
    currentConnections[socket.id] = {};
    
    socket.use((packet, next) => {
        auth.isAllowed(packet, socket, next)
    });
    console.log('a user connected');
    socket.on('user', user.list);
    socket.on('project', project.list);
    socket.on('holiday', holiday.list);
    socket.on('plan', (data, done) => {
        currentConnections[socket.id]['planFilters'] = data;
        plan.list(data, done);
    });
    socket.on('plan/get', plan.get);
    socket.on('group', group.list);
    socket.on('plan/create', (data, done) => {
        let doneRefresh = function(data) {
            plan.refreshPlans(io, currentConnections);
            done(data);
        };
        plan.create(data, doneRefresh, socket);
    });
    socket.on('plan/update', (data, done) => {
        let doneRefresh = function(data) {
            plan.refreshPlans(io, currentConnections);
            done(data);
        };
        plan.update(data, doneRefresh, socket);
    });
    socket.on('plan/delete', (data, done) => {
        let doneRefresh = function(data) {
            plan.refreshPlans(io, currentConnections);
            done(data);
        };
        plan.delete(data, doneRefresh, socket);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    
    socket.on('disconnect', function() {
        delete currentConnections[socket.id];
    });
});

http.listen(config.port, function () {
    console.log('listening on *:' + config.port);
});

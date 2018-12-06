var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors');
var ejs = require('ejs');

var app = express();
app.use(cors());

var socket = require('socket.io'), http = require('http'),
  server = http.createServer(app), socket = socket.listen(server);
socket.on('connection', function(connection) {
   console.log('User Connected');
   
   connection.on('message', function(msg){
     socket.emit('message', msg);
   });
});

// var server = http.createServer(app);
// var root = path.normalize(__dirname + '/');
// app.set('views', path.join(root, 'views'));
app.set('view engine', 'ejs');
require('./settings/routes').configure(app);
require('./settings/database').configure(mongoose);
require('./settings/routes').configure(app);


server.listen(3000, function(){
    console.log('Server started');
    });
    exports.module = exports = app; 

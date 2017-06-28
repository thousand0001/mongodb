/*
var http = require("http");
var io = require('socket.io'); // 加入 Socket.IO
var express = require ('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/public'));

var server = http.createServer(function(request, response) {
console.log('Connection');
});
app.listen('8080');
server.listen(8001);

//io.listen(server); // 開啟 Socket.IO 的 listener
var serv_io = io.listen(server);

serv_io.sockets.on('connection', function(socket) {
socket.emit('message', {'message': 'hello world'});
setInterval(function() {
socket.emit('date', {'date': new Date()});
}, 1000);
});
///////////

var io = require('socket.io')();
io.on('connection', function(socket){
  socket.emit('message', {'message': 'hello world'});
  setInterval(function() {
    socket.emit('date', {'date': new Date()});
  }, 1000);
});
io.listen(8001);
/////////////
app.set('port', (process.env.PORT || 5000));
*/

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static(__dirname + '/public'));
io.on('connection', function(socket){

  io.emit('message', {'message': 'hello world'});
  setInterval(function() {
    io.emit('date', {'date':Date( Date.now()),'offset':getTimezoneOffset()/60}) ;//Date.setUTCHours()
    //io.emit('date', {'date': Date(new Date().setUTCHours(0))});//Date.setUTCHours()
  }, 1000);
});
server.listen(process.env.PORT || 8001);

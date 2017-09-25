// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
// var io = require('../..')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

// Chatroom

// Setup basic express server
var express = require('express');
var app = express();
const url = require('url');
var path = require('path');
var server = require('http').createServer(app);
const WebSocket = require('ws');
// var io = require('../..')(server);
// var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
var iswsopen=0;


// Routing
// app.use(express.static(__dirname+'/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res) {
  res.send("Hello world, I'm Luke, this is my test page!");
});
// Chatroom
const wss = new WebSocket.Server({ server });
wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);
  // console.log(ws);
  console.log(ws._isServer);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  ws.on('open',function open(){
    console.log('ws open');
    iswsopen=1;
  });
  ws.on('close', function close() {
    console.log('close');
    iswsopen=0;
  });
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('received: '+ message+' '+Date.now().toString());
    // ws.send(message);
  });


});


server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
// io.on('connection', function (socket) {
//   var addedUser = false;
//
//   // when the client emits 'new message', this listens and executes
//   socket.on('new message', function (data) {
//     // we tell the client to execute 'new message'
//     socket.broadcast.emit('new message', {
//       username: socket.username,
//       message: data
//     });
//   });
//   socket.on('test',function(data){
//     console.log(data);
//     socket.emit()
//   })
//
//   // when the client emits 'add user', this listens and executes
//   socket.on('add user', function (username) {
//     if (addedUser) return;
//
//     // we store the username in the socket session for this client
//     socket.username = username;
//     ++numUsers;
//     addedUser = true;
//     socket.emit('login', {
//       numUsers: numUsers
//     });
//     // echo globally (all clients) that a person has connected
//     socket.broadcast.emit('user joined', {
//       username: socket.username,
//       numUsers: numUsers
//     });
//   });
//
//   // when the client emits 'typing', we broadcast it to others
//   socket.on('typing', function () {
//     socket.broadcast.emit('typing', {
//       username: socket.username
//     });
//   });
//
//   // when the client emits 'stop typing', we broadcast it to others
//   socket.on('stop typing', function () {
//     socket.broadcast.emit('stop typing', {
//       username: socket.username
//     });
//   });
//
//   // when the user disconnects.. perform this
//   socket.on('disconnect', function () {
//     if (addedUser) {
//       --numUsers;
//
//       // echo globally that this client has left
//       socket.broadcast.emit('user left', {
//         username: socket.username,
//         numUsers: numUsers
//       });
//     }
//   });
// });

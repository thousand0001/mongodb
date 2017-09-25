// Setup basic express server
var express = require('express');
var app = express();
const http = require('http');
var path = require('path');
var server = http.createServer(app);
const url = require('url');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  const ip = req.connection.remoteAddress;
  console.log('ip:'+ip.toString());

  wss.on('message', function incoming(msg) {
    // var obj=JSON.parse(msg);
    // console.log('receive name: %s', obj.name);
    // console.log('receive company: %s', obj.company);
    console.log('received  : %s', msg);
    wss.send(msg);
  });
//   var msg =  JSON.stringify({
//     'name': 'luke',
//     'company': '0987654321',
//     'time':Date.now()
// });
});
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

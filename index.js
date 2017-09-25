const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');
var path = require('path');

const app = express();
const server = http.createServer(app);

app.use(function (req, res) {
  res.send({ msg: "hello" });
});
app.use(express.static(__dirname+ '/public'));

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message);
  });

});

var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

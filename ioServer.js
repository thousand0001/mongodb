const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

app.use(function (req, res) {
  res.send({ msg: "hello" });
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(wss, req) {
  // const location = url.parse(req.url, true);
  // // You might use location.query.access_token to authenticate or share sessions
  // // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  // const ip = req.connection.remoteAddress;
  // console.log('ip:'+ip.toString());

  wss.on('message', function incoming(msg) {
    // var obj=JSON.parse(msg);
    // console.log('receive name: %s', obj.name);
    // console.log('receive company: %s', obj.company);
    // console.log('received time : %s', obj.time);
    console.log('received message:%s', msg);
    wss.send(msg);

  });
//   var msg =  JSON.stringify({
//     'name': 'luke',
//     'company': '0987654321',
//     'time':Date.now()
// });
});

server.listen(8000, function listening() {
  console.log('Listening on %d', server.address().port);
});

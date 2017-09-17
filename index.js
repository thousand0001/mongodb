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
  console.log("connection");
  socket.on('event', function(data){
    console.log("data received;");
  });

  socket.emit('message', {'message': 'hello world'});
  setInterval(function() {
    socket.emit('date', {'date':Date( Date.now())}) ;//Date.setUTCHours()
  }, 2000);
});
server.listen(process.env.PORT || 8005);
app.get('/', function(request, response) {
  response.send('Hello World!!!!');
});

/////////////////////////
/*
var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  // url: 'mongodb://localhost:27017/mqtt',
  url: 'mongodb://thousand0001:mm570129@ds153730.mlab.com:53730/heroku_tmgjg46t',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var settings = {
  port: 1883,
  backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}
*/

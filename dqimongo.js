
//var mytimezone = require("./mymodules/mytimezone.js");
var eId ;
var events = require('events');
////////test///////////

//////// express ////////////

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
	app.set('port', (process.env.PORT || 5000));
	app.use(express.static(__dirname + '/public'));
	app.get('/', function(request, response) {
	  response.send('Hello dqimongo!');
	});
	app.listen(app.get('port'), function() {
	  console.log('Node app is running on port', app.get('port'));
	  //console.log("Now time :"+mytimezone.tpi());
	});
//////////////// facebook ////////////////
var facebooktoken = 'EAANIBnZBXqMQBAC95bYZBjPgnVSm666xEoGOKZApwIoLe9gZAmK42ZAphols3wugOFzVOZBrTxXe9geN3mMhaqZCLcdGnY78qtIkx9HrHJNXn8DphtAhpZBSyDTqu3NnEj5qNn34aZC0EXkmyBZBzVJwTZCu9fkMxcjjYv4w9kfP1zK1AZDZD';



const port = '7123';
const VERIFY_TOKEN =
'1234';
const PAGE_TOKEN = facebooktoken;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/webhook/', (req, res) => {
  if (req.query['hub.verify_token'] === facebooktoken) {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})

app.post('/webhook/', (req, res) => {

  console.log(req.body);

  const messaging_events = req.body.entry[0].messaging;
  for (let i = 0; i < messaging_events.length; i++) {
    const event = req.body.entry[0].messaging[i];
    const sender = event.sender.id;
    if (event.message && event.message.text) {
      const text = event.message.text;
      sendTextMessage(sender, "Text received, echo: "+ text.substring(0, 200));
    }
  }
  res.sendStatus(200);
});

app.listen(port, () => console.log(`listening on port ${port}`));

function sendTextMessage(sender, text) {

  const messageData = {
    text: text
  }

  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
        access_token:facebooktoken
    },
    method: 'POST',
    json: {
      recipient: {
        id: sender
      },
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
}

//////////////// mongoose /////////////////

var mongoUtil = require( './mymodules/mongoUtil' );
var mongoConn = mongoUtil.connectToServer( function( err ) {
});
var dqs = "dqs0033";
var newUserId = "1234567890";
var bindings = mongoUtil.getBindings();
var data = new bindings({"eId":dqs,"lId":newUserId});
data.save(function(err){
	if (err) {
		return console.error(err);
	} else {
		console.log("newUserId儲存成功");
	}
});
bindings = null;
/*
var bindings = mongoUtil.getBindings();
(function (){
	console.log("typeof bindings: "+typeof(bindings));
	bindings.find({"eId":eId},function(err,docs){
		if (err) {
			return;
		}
		docs.forEach( function(doc){
		console.log(doc.eId+",Line id:"+doc.lId);
		});
	eId = null;
	})
})();
*/

//////////////// mqtt //////////
var i = 0;
var payload;
const TOPIC = "hello/world2";
const HOST = 'mqtt://180.218.166.199';
var mqtt = require('mqtt');
var mqttClient  = mqtt.connect(HOST)
mqttClient.on('connect', function () {
  mqttClient.subscribe(TOPIC);
});

function msg2(topic, payload2,packet2){
	console.log("listen msg2");
	//if (payload2 == '123'){
		payload+=payload2;
		console.log(payload);
	//}
}

mqttClient.on('message', function msg1(topic, payload1,packet1){
	console.log("listen msg1");
	if (payload1 == '123') {
		payload=payload1;
		mqttClient.once('message',msg2);

		//setTimeout(function(){mqttClient.removeListener('message', msg2);console.log("removeListener msg2");}, 15000);

		//mqttClient.removeListener('message', msg2);
		//mm();
		//mqttClient.reconnect();
	//mqttClient.removeListener('message', msg1);
	/*
	var payloadJson = JSON.parse(payload);
	console.log("matt receive paylod.eId:"+payloadJson.eId);
	console.log("mqtt receive topic:"+topic+",payload:"+payload);
		var bindings = mongoUtil.getBindings();
		bindings.find({"eId":payloadJson.eId},function(err, docs){
			if (err) {
				console.log("mqtt message call mongodb error!");
				return;
			}
			console.log("docs:"+docs);
			docs.forEach( function(doc){
				console.log( "eId:"+doc.eId);
				console.log( "lId:"+doc.lId);
			});
		});
	bindings=null;
	payloadJson=null;	*/
  	//client.end()
	};
});
console.log(mqttClient.listeners('connection'))
setInterval(function(){ console.log('喔喔！'+(++i)) }, 2000);

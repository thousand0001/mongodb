
//var mytimezone = require("./mymodules/mytimezone.js");
/*
var eId ;
var events = require('events');
////////test///////////

//////// express ////////////

//import express from 'express';
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
//import request from 'request';
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
/*
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
*/
//////////////// mongoose /////////////////

var mongoUtil = require( './mymodules/mongoUtil' );
var mongoConn = mongoUtil.connectToServer( function( err ) {
});
var dqs = "dqs001";
var newUserId = "U9b3f25184cbfadb0d7b2e9357d0c6f64";
var bindings = mongoUtil.getBindings();
var equips = mongoUtil.getEquips();
//var newEquip = new equips({"eId":dqs,"lId":newUserId});
// Model.find( {...}, function (err, results) {
bindings.find({"eId":dqs,"lId":newUserId},function(err, results){
	if (err){
		console.log('bindings.find error');
		return;
	}
	if (!results.length) {
		console.log('not found');
	}else{
		console.log('resutls.length: '+results.length);
		//results.forEach(function(err, index){
//bindings.remove(results,function(err,docs){
	//
//});			//results.remove(function(){
				//;
			}
		//})
		//console.log(newUserId+" is remove");


	//mongoUtil.disconnect();
});

// for (var i=1;i<10;i++){
// 	var newEquip = new  equips();
// 	newEquip.eId = 'dqs00'+i.toString();
// 	newEquip.password = '123456';
// 	newEquip.save(function(err){
// 		if (err) {
// 			return console.error(err);
// 		} else {
// 			console.log('dqs00'+i+" 儲存成功");
// 		}
// 		newEquip = null;
// 		delete newEquip;
// 	// 	//mongoUtil.disconnect();
// 	});
// }
mongoUtil.removeBinding(newUserId);
// bindings.remove({"lId":newUserId},function(err){
// 	if(err){
// 		console.log("remove error");
// 		return;
// 	}
// 	console.log("remove ack");
// })
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
/*
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


	};
});
console.log(mqttClient.listeners('connection'))
mqttClient.end();
//app.close();

// setInterval(function(){ console.log('喔喔！'+(++i)) }, 2000);
*/

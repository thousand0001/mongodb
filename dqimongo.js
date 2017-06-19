
//var mytimezone = require("./mymodules/mytimezone.js");
var eId ;
var events = require('events');
////////test///////////
var moment = require('moment');
var now = moment();
console.log(now.format());
//////// express ////////////

var express = require('express');
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


//////////////// mongoose /////////////////

var mongoUtil = require( './mymodules/mongoUtil' );
var mongoConn = mongoUtil.connectToServer( function( err ) {
});
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



//var mytimezone = require("./mymodules/mytimezone.js");
var eId ;

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
const TOPIC = "hello/world2";
const HOST = 'mqtt://180.218.166.199';
var mqtt = require('mqtt'); 
var mqttClient  = mqtt.connect(HOST) 
mqttClient.on('connect', function () {
  mqttClient.subscribe(TOPIC);
});
mqttClient.on('message', function msg1(topic, payload1){
	mqttClient.on('message', function msg2(topic, payload2){
			payload=payload1+payload2;	
			console.log(payload);
	//		mqttClient.end(function(){
				if(mqttClient.connected){
					i++;
					console.log(i)
				} else{
					console.log("mqtt end");
				}
		mqttClient.removeListener('message', msg2);
	});
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
});



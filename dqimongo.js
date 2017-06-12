
var mytimezone = require("./mymodule/mytimezone.js");
var eId = 'dqs001';

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
	  console.log("Now time :"+mytimezone.tpi());
	});


//////////////// mongo /////////////////

var MongoClient = require('mongodb').MongoClient;
var mongoUtil = require( './mymodule/mongoUtil' );
var mongoConn = mongoUtil.connectToServer( function( err ) {
	var db = mongoUtil.getDb();
	var equipments = mongoUtil.getEquipments();
	(function (){	
		equipments.find({"eId":eId}).toArray(function(err,docs){
			if (err) {
				return;
			}
			//for(index in docs) {
			docs.forEach( function(doc){
			//var doc = docs[index];
			console.log(doc.eId+",Line id:"+doc.lId);
			//arr.push(doc._id);
			});
		eId = null;	
		})
	})();
	
		//db.close();	
});

//////////////// mqtt //////////

const TOPIC = "hello/world2";
const HOST = 'mqtt://180.218.166.199';
var mqtt = require('mqtt'); 
var mqttClient  = mqtt.connect(HOST) 
mqttClient.on('connect', function () {
  mqttClient.subscribe(TOPIC);
});
mqttClient.on('message', function msg(topic, payload){
	console.log("mqtt receive topic:"+topic+",payload:"+payload);
	//var mongoConn = mongoUtil.connectToServer( function( err ) {	
		var equipments = mongoUtil.getEquipments();
		//console.log(typeof(payload)); console.log(JSON.stringify(payload));
		equipments.find({"eId":payload.toString().trim()}).toArray(function(err, docs){
			if (err) {
				console.log("mqtt message call mongodb error!");
				return;
			}
				//for (index in docs){
			docs.forEach( function(doc){
			console.log( "eId:"+doc.eId);
			console.log( "lId:"+doc.lId);
			}); 
		});	
	//});	
});


/* 	{"eId":payload}
MongoClient.connect( mongoUtil.dburl, function( err, db ) {
	var col = db.collection('cats');
	col.find({}).toArray(function(err, docs){
		if (err) {
			return;
			}
		for(index in docs) {
		var doc = docs[index];
		console.log(doc.name);
		//
		}
	});		

}); 
 
 ///////////
  db.cats.find({}).toArray(function(err, docs){
 for (index in docs){
  var doc = docs[index];
 	}
 
 })
 ///////////////////
var kitty = new Cat();
kitty.name = 'Zildjian';
kitty.age = 10;
kitty.save();
/////////
*/

	/*
	equipments.insert({
		"qId": "dqiG02",
		"bindingQty" : 1,
		"bindingMax" : 4,
		"valveId" : "dqiV04" 
		//,	"created": Timestamp
		}, function(err, docs){
		if (err) {
		console.log('insert err');
		return;
		}
		console.log('equipment insert success');
	});
	
	var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });      
}
	
*/
	


	
	
	
        //Cats.find({"age":{$lt:13}}).toArray(function(err, cats) {
          //Cats.find({"age":{$lt:13}}).forEach(function(cat) {
           //{age:{$gt:7}}
    	//for (var index in cats) {
		//var cat  = cats[index];
		//console.log(cats[index].name);
		//console.log(cat.name);
		//console.log(cat.age);
		//}
//     });

/*

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
MongoClient.connect('mongodb://thousand0001:mm570129@ds153730.mlab.com:53730/heroku_tmgjg46t', function(err,db){
	var Cats = db.collection('cats');
	
	
		Cats.find({name:"Lulu"}).forEach(function(cat) {
		console.log(cat.name+", "+cat.age);
}, function(err) {
  // done or error
});

	db.close();
			 
});
*/
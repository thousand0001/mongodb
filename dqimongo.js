var express = require('express');
var app = express();
var mytimezone = require("./module/mytimezone.js");
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  response.send('Hello dqimongo!');
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  console.log("Now time :"+mytimezone.tpi());
});
 /*
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/
require ('./lib/db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Cat = mongoose.model('Cat');
var kitty = new Cat();
kitty.name = 'Lulu';
kitty.age = 8;
kitty.save()
Cat.find({age:{$gt:7}}, function(err,cats){ //age > 7
	for (var index in cats) {
		var cat = cats[index];
		console.log("No.:"+index);
		console.log("name:"+cat.name);
		console.log("age:"+cat.age);
	}
});

var kitty = new Cat();
kitty.name = 'dqicat';
kitty.age = 8;
kitty.save();

 mongoose.disconnect();
 
 
 
/* 
 
 
 ///////////
 
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
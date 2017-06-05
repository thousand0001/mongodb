var express = require('express');
var app = express;
app.use(express.static(__dirname + '/public'));
//var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});
app.listen(80);
 /*

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
		console.log(cat.name);
		console.log(cat.age);
	}
});



 mongoose.disconnect();
 
 
 
 
 
 
 ///////////
 
var kitty = new Cat();
kitty.name = 'Zildjian';
kitty.age = 10;
kitty.save();
/////////
*/
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
MongoClient.connect('mongodb://thousand0001:mm570129@ds153730.mlab.com:53730/heroku_tmgjg46t', function(err,db){
	var Cats = db.collection('cats');
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
	
	Cats.find({name:"Lulu"}).forEach(function(cat) {
		console.log(cat.name+", "+cat.age);
}, function(err) {
  // done or error
});

	
	
	
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

	db.close();
			 
});

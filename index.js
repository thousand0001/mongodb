//require ('./lib/db');

//*
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
MongoClient.connect('mongodb://thousand0001:mm570129@ds153730.mlab.com:53730/heroku_tmgjg46t/dqi', function(err,db){

	var equipments = db.collection('equipments');
	equipments.insert({
		"eqId": "dqiG01",
		"bindingQty" : 1,
		"bindingMax" : 4,
		"valveId" : "dqiV01" 
		}, function(err, docs){
		if (err) {
		console.log('insert err');
		return;
		}
		console.log('equipment insert success');
	});

			 
});
//*/
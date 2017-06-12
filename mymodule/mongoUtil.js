var MongoClient = require('mongodb').MongoClient;
var _db;
var coll;
var equipments;
var arg = ['equipments','cats'];
var url ='mongodb://thousand0001:mm570129@ds153730.mlab.com:53730/heroku_tmgjg46t';
// Connection url
// Connect using MongoClient
module.exports = {
	connectToServer: function(callback) {
		MongoClient.connect( url, function( err, db ) {
		_db = db;
		//adb = new Mongo().getDB("heroku_tmgjg46t");
		equipments = db.collection(arg[0]);
		return callback( err );
		});
	},

	getDb: function() {
		return _db;
	}, 
	getEquipments: function(){ 
		return equipments;
	},
	getDocs: function(){
		var arr;
		function a(){
			var arr1;
			coll.find({}).toArray(function(err,docs){
			arr1 = docs;
			return arr1;
			});
			arr = arr1;
		};
		a();
		return arr;			
	},	
	testObj: {'name':'Luke', 'age':53},
	dburl:url
};


/*
  Db.find({}).toArray(function(err,docs){
  
  for (var index in docs){
  var doc = docs[index];
  console.log(doc.name);
  }
  ;
  });
  //////////////////////
  var MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( "mongodb://localhost:27017/marankings", function( err, db ) {
      _db = db;
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};

too use it, you would do this in your app.js:

var mongoUtil = require( 'mongoUtil' );

mongoUtil.connectToServer( function( err ) {
  // start the rest of your app here
} );
And then, when you need access to mongo somewhere, you can do this:

var mongoUtil = require( 'mongoUtil' );
var db = mongoUtil.getDb();

db.collection( 'users' ).find();


//////////////////
MongoClient.connect(url, function(err, db) {
  var Db = db.collection('cats');
  module.exports(Db).toArray();
    db.close();
});
 */
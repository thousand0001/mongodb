var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var url ="mongodb://thousand0001:mm570129@ds153730.mlab.com:53730/heroku_tmgjg46t";
var bindings = mongoose.model("bindings",{
	"eId":String,
	"lId":String,
	"creatTime":{type:Date, default:Date.now}
});
module.exports = {
	connectToServer: function(callback) {
		mongoose.connect(url);
		var db = mongoose.connection;
		db.on("error", console.error.bind(console, "connection error:"));
		db.once("open", function() {
  			console.log("We're connected to mongodb! ");
		});
	},	
	getBindings: function(){
		return bindings;
	},
	getDb: function(){
		return db;
	}	
}	


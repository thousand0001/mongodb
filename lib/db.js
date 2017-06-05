var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CatSchema = new Schema({
	"name":String,
	"age":Number,
	'created':{type:Date, default:Date.now}
	});
mongoose.model('Cat',CatSchema);	
var uristring =
	//'mongodb://thousand0001:mm570129@ds111771.mlab.com:11771/dqi';
    'mongodb://thousand0001:mm570129@ds153730.mlab.com:53730/heroku_tmgjg46t';
mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
});
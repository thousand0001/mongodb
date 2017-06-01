var mongoose = require('mongoose');
var uristring =
    'mongodb://thousand0001:mm570129@ds153730.mlab.com:53730/heroku_tmgjg46t/dqi';
mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
});
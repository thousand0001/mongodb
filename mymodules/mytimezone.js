//function timezone(){//"Asia/Taipei"
exports.tpi = function(){
var d = new Date();
localTime = d.getTime();
localOffset = d.getTimezoneOffset() * 60000;
utc = localTime + localOffset;
console.log("UTC: "+utc);
TPIoffset = 8;   
TPI = utc + (3600000*TPIoffset);
nd = new Date(TPI);
APM="上午";
// Hours part from the timestamp
var hours = Number(nd.getHours());
if (hours > 12){
	hours-=12;
	APM="下午";
	}
else if (hours == 12){
	APM="中午";
	}	
// Minutes part from the timestamp
var minutes = "0" + nd.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + nd.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = APM + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	return (formattedTime);
}
//}
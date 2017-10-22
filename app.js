var express = require("express");
var path=require('path');
var app = express();
server  = require('http').Server(app);
app.set('views',__dirname);    // 设置视图
app.set('view engine', 'html');
app.engine( '.html', require( 'ejs' ).__express );
require('./index1')(app);      //路由配置文件
server.listen(8088,function(){
console.log('App start,port 80.');
});
//git remote test

module.exports = function(app){
app.get('/',function(req,res){
res.render('test',{issuccess:"successful"})
});
app.get('/interface',function(req,res){});
app.post('/interface',function(req,res){});
}
////

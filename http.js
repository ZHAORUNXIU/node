//第一个Express框架实例
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
app.get('/hi', function (req, res) {
    res.send('Hi World');
 })
var server = app.listen(8084, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
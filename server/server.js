var http = require("http");


var server = http.Server();
// var server = http.createServer();

var counter=0;

server.on("request", function(req, res){
  counter+=1;
  res.end("hello world! "+ counter+ "\r\n");
});

server.listen(1337);

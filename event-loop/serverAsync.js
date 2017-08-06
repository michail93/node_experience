var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
  var info;

  if (req.url=="/"){
    fs.readFile("index.html", function(err, info){
      if(err){
        console.log(err);
        res.statusCode=500;
        res.end("Internal server Error!");
      }
      res.end(info);
    });
  }else{
    res.statusCode=404;
    res.end("page not found!");
  }
}).listen(30001);

var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
  var info;

  console.log(req.method, req.httpVersion, req.headers);

  if (req.url=="/"){
    try{
      info=fs.readFileSync("hello.html");
    }catch(err){
      console.log(err);
      res.statusCode=500;
      res.end("Internal server error");
    }
    res.end(info);
  }else{
    res.statusCode=404;
    res.end("page not found!");
  }
}).listen(30000);

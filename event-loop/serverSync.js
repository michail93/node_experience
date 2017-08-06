var http = require("http");
var fs = require("fs");
var url = require("url");



http.createServer(function(req, res){
  var info;
  var get_url;

  console.log(req.method, req.httpVersion, req.headers);

  if (req.url=="/"){
    try{
      info=fs.readFileSync("index.html");
    }catch(err){
      console.log(err);
      res.statusCode=500;
      res.end("Internal server error");
    }
    get_url=url.parse(req.url);
    console.log(req.method);
    res.end(info);
  }else{
    res.statusCode=404;
    res.end("page not found!");
  }
}).listen(30000);

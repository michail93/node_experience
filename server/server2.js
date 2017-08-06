var http = require("http");
var url = require("url");

var server = new http.Server(function(req, res){
  console.log(req.method, req.headers);
  var urlParsed=url.parse(req.url, true);
  console.log(urlParsed);

  if (urlParsed["pathname"]=="/echo" && urlParsed.query.message){
    res.statusCode=200;
    res.setHeader("Cache-Control", "no-cache");
    res.end(urlParsed["query"].message + "\n");
  }else{
    res.statusCode=404;
    res.end("Page not found");
  }
});

server.listen(15015);

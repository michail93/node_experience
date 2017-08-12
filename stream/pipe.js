var http = require("http");
var fs = require("fs");

new http.Server(function(res, req){
  if (req.url=="/big.html"){
    var file = new fs.ReadStream("big.html");
    sendFile(file, res);
  }
}).listen(15015);

function sendFile(file, res){
  file.pipe(res);

  file.on("error", function(err){
    res.statusCode=500;
    res.end("Server Error");
    console.error(err);
  });

  file.on("open", function(){
    console.log("open");
  });

  file.on("close", function(){
    console.log("close");
  });

  res.on("close", function(){
    file.destroy();
  });
}

var http = require("http");
var fs = require("fs");
var chat = require("./chat");

http.createServer(function(req, res){
  switch (req.url){
    case "/":
      sendFile("index.html", res);
      break;
    case "/subscribe":
      chat.subscribe(req, res);
      break;
    case "/publish":
      chat.publish("...");
      break;
    default :
      console.log(res.url);
      res.statusCode=404;
      // res.end("End found");
      console.log(res.end);
      console.log(typeof res)
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

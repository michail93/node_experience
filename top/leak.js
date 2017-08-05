var EE = new require("events").EventEmitter;

var db = new EE;

function Request(){
  var self = this;

  this.bigData = new Array(1e6).join("*");

  this.send=function(data){
    console.log("Sorry we have a problem ", data);
  }

  function onData(info){
    self.send(info);
  }

  this.end = function(){
    db.removeListener("data", onData);
  }

  db.on("data", onData);
}

// setInterval(function(){
//   var requset = new Request();
//   console.log(process.memoryUsage().heapUsed);
//   console.log(db);
// }, 200);

req = new Request();

db.emit("data", {"hello" : "world!"});

db.on("get", function(){
  console.log(12345);
});

req.end();

console.log(db.listeners("get"), db.listeners("data"));

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on("request", function(request){
   request.approved=true;
 });

server.on("request", function(request){
   console.log(request);
 });

c=server.on("error", function(err_event){
  console.log("Error catch!");
});

a = server.emit("request", {from: "Client"} );
b = server.emit("request", {from:"Again Client"});

console.log(server.listeners("request"));

server.emit("error");

console.log(c);

console.log(server.getMaxListeners());

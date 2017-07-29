var db = require("./db");
db.connect();

var User= require("./user")

function run(){
  // var name1 = new user.User("user1");
  // var name2 = new user.User("user2");

  var name1 = new User("user1");
  var name2 = new User("user2");

  name1.hello(name2);
  console.log(db.getPhrase("Run successfull"))
};

if (module.parent){
  exports.run=run;
}else{
  run();
}

// console.log(module)

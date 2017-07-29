var user= require("./user")

var name1 = new user.User("user1");
var name2 = new user.User("user2");

name1.hello(name2);

var util = require("util");

var phrases={
  "Hello":"Привет",
  "world":"мир",
};

function PhraseError(message){
  this.message=message;
  Error.captureStackTrace(this, PhraseError);
}

PhraseError.prototype = new Error;
PhraseError.prototype.name = "PhraseError";

function HttpError(status, message){
  this.status=status;
  this.message=message;
}

HttpError.prototype = new Error;
HttpError.prototype.name = "HttpError";

function getPhrase(name){
  if (!phrases[name]){
    throw new PhraseError("this phrase not in array: "+name);
  }
  return phrases[name];
}

function makePage(url){
  if(url !="index.html"){
    throw new HttpError(404, "There is no such page");
  }
  return util.format("%s, %s!", getPhrase("*****"), getPhrase("world"));
}

try{
  var page = makePage("index.html");
  console.log(page);
}catch (e){
  if (e instanceof HttpError){
    console.log(e.status, e.message);
  }else{
    console.error("Error %s\n message: %s\n stack :%s", e.name, e.message, e.stacks);
  }
}

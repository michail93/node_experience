var fs = require("fs");

fs.readFile("12", "utf-8", function(err, data){
  if (err.code=="ENOENT"){
    console.log(err.message);
  }else{
    console.log(data);
  }
});

fs.stat(__filename, function(err, stats){
  console.log(stats.isFile());
  console.log(stats);
});

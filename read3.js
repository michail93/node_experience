var fs = require("fs");

fs.unlink("new.tmp", function(err){
  if (err) throw err;
});

var async = require("async");
var fs = require("fs");
var pages = ['folder/example.txt','folder/newFile.txt','folder/example2.txt'];


async.waterfall([
  function(next) { //does the directory exist?
    fs.stat("folder", next);
  },
  function(stat, next) { //now read the file
    fs.readFile("folder/example.txt", "utf8", next);
  },
  function(data, next) {
  	console.log(data);
    data += ", and some more text added to it";
    fs.writeFile("folder/newFile2.txt", data, next);
    // console.log("folder/newFile2.txt", data, next);
    console.log(data);
    
  }
], function(err, result) {
  if (err) return console.log("unable to complete waterfall");
  //otherwise, we're done!
  console.log("write completed!");
});
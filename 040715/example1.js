var fs = require("fs");

var files = require("./files");

console.log(files);
var file = "example.txt";
var vBlah = "Blah Blah";
var jBlah = vBlah.split("");
console.log(jBlah.length);
jBlah.splice(4,1);

console.log("jBlah is");
console.log(jBlah.length);
console.log(jBlah.join("").toLowerCase());




fs.readFile("example.txt", "utf8", function(err, file) {
  //use an early return to quit on errors
  if (err) return console.log("Couldn't read file!");
  //otherwise, add one and write the file
  var added = (file * 1) + 1;
  fs.writeFile("number.txt", added, function(err) {
    //on error, let the user know
    if (err) return console.log("Couldn't write to the file!");
    //otherwise, log success
    console.log("Wrote file: ", added);
    console.log(file.length);
    // var joined = file.join();
    
  });
});
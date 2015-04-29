var fs = require("fs");

var onRead = function(err, data) {
  if (err) return console.log("Couldn't read file");
  added = (data * 1) + 1;
  fs.writeFile("number.txt", added, onWrite);
};

var onWrite = function(err) {
  if (err) return console.log("Couldn't write file");
}

fs.readFile("number.txt", "utf8", onRead);
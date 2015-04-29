var async = require("async");
var fs = require("fs");
var request = require("request");

var pages = ['folder/example.txt','folder/newFile.txt','folder/example2.txt'];

async.map(pages, function(url, done) {
  request(url, function(err, response, body) {
    if (err) return done(err); //if any response fails, pass the error on
    done(null, body); //otherwise, error is null, and pass on the body
  });
}, function(err, result) { //called when all are complete
  console.log(pages); // logs: 3
});


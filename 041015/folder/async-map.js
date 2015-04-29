var async = require("async");
var fs = require("fs");
var pages = ["http://google.com", "http://github.com", "http://seattlecentral.edu"];

async.map(pages, function(url, done) {
  request(url, function(err, response, body) {
    if (err) return done(err); //if any response fails, pass the error on
    done(null, body); //otherwise, error is null, and pass on the body
  });
}, function(err, result) { //called when all are complete
  console.log(result.length); // logs: 3
});
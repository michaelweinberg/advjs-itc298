var async = require("async");
var fs = require("fs");
var request = require("request");
var path = require("path");

var p = "./folder"
fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }
    
     files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        console.log("%s (%s)", file, path.extname(file));
    });
    
   
});
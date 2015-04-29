/**
 * @author Michael 
 */


//var fs = require("fs");

var files = require("./files");

console.log(files);

var whenRead =function(err,data){
	if(err){
		return console.log("Couldn't read file");
	}
	
	console.log("File contains:", data)};

// fs.readFile("newfile.txt", "utf8", whenRead);

files.read("newfile.txt", whenRead);

var request = require("request");

var url = "https://github.com/thomaswilburn/itc298-materials.git";

request(url, function(err, response, body){
	console.log("Body length: ", body.length);
});


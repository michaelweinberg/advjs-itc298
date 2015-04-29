/**
 * @author Michael
 * files.js
 * 
 */

var fs = require("fs");

var read = function(filename, callback){
	fs.readFile(filename, "utf8", function(err, data){
		if (err)return callback(err);
		data = data + "...";
		callback(null,data);
	});
	
};

console.log("Hello from the file.js module");

module.exports={
	read: read
};




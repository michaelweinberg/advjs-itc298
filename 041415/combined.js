//read urs.txt
//split it into lines
//for each url
	// request it
	// create an output
	// pipe it to the file
	// when done, log errors
	
var fs = require("fs");
var async = require("async");
var request = require("request");
var url = require("url");

fs.readFile("urls.txt", "utf8", function(err,file){
	var list = file.split("\n");
	console.log(list);
	async.each(list, function(line, callback){
		// for each item
		if (!line) return callback();
		var parsed = url.parse(line);
		console.log(parsed);
		var output = fs.createWriteStream(parsed.host + ".html");
		var req = request.get(line);
		req.pipe(output);
		req.on("end", callback);
	}, function (err){
		//all done
		if (err) console.log(err);
		console.log("This is the callback");
	});
	
});

	
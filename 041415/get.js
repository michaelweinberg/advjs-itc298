var request = require("request");
var fs = require("fs");

// request("http://google.com", function (err, res, body){
	// console.log(body);
// });

var req = request.get("http://google.com");
	// req.on("response", function(response){
		// console.log(response);
	// })
	// req.on("error", function(err){
		// console.log(err);
	// });
	
var output = fs.createWriteStream("download.html");

req.pipe(output);

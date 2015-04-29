
var fs = require("fs");
var async = require("async");

// Get the listing of all files in the directory, using the fs.readdir function.

fs.readdir("lab_folder", function(err,files){
	
	async.each(files, function(item, callback){
		// for each item
		
		// fs.readFile(file, 'utf8', function(err, data) {
			// // console.log(data);
		// });
		var content;
	  	var needle = "needle";
	  fs.readFile('lab_folder/' + item, 'utf8', function read(err, data) {
		    
		    if (err) throw err;
 			console.log(data.toString());
 			if(/*find the data aync.METHOD (.match?)*/){
 				console.log("it's there in ", item);
 			}else{
 				console.log("can't find it in", item);
 			};
 			callback();
		});
		
		
		
	}, function (err){
		//all done
		if (err) console.log(err);
		console.log("All done");
	
	});
	
});


// Use the async module to log the name of each file, then log "all finished" when done.




// For each file, open a stream, and log each line to the console, preceded by the filename.




// Check each line for "needle" and add the file to an array of matches, logged out at the end.





// As a bonus, use async.filter to create the array of matches.


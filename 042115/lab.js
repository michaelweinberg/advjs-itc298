// Start by logging out each function in turn.
// Try looping through each function synchronously, passing each one a callback function that just logs the index of the completed function.
// Now loop through each item, but add one to a counter variable each time your callback is called.
// Remove the loop: how can you use just the callback and the counter variable to call the next item as an "implied" loop?


var asyncSeries = function (tasks,done){
	var counter = 0;
	var callback = function(){
		counter++;
		var next = tasks[counter];
		next(callback);
	}
	
	var fn = tasks[counter];
	fn(callback);
} ;



asyncSeries([
	function(callback){
		console.log(1);
		counter++;
		callback();
	}, function(callback){
		setTimeout(function(){
			console.log(2);
			counter++;
			callback();
		},1000);
	}, console.log.bind(console, 3)
	], function(err){
		console.log("This should not run unless there are errors");
	});

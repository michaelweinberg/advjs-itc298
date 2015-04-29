var wait = require("./wait");



var fib = [1,1,2,3,5,8,11];
var output = [];


wait("information", function(err, data){
	console.log(data);
});


//synchronous loop
// fib.forEach(function(item){
	// output.push((item*2));
// });
// console.log(output);


//async loop that works
var async = require("async");

async.map(fib, function(item, callback){
	wait(item, function(err, data){
		//callback(null, data * 2);
		// output.push(data*2);
		callback(null,data*2);
	});
},function(err, mapped){
	//we are actually done waiting
	console.log(mapped);
});


async.waterfall([
	function(c){
		console.log(1);
		wait(1,c);
	},
	function(data,c){
		console.log(2);
		wait(2,c);
	},
	function(data,c){
		console.log(3);
		wait(3,c);
	}
], function(){
	console.log("all done");
})

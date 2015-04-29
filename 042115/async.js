/**
 * @author Michael
 *asinch.each
 * @param list An array to be processed
 * @param iterator A function to be called on each item
 * @param complete A function to be called when all items are complete
 * */

var wait = require("./wait");

wait("echo....", function(err,value){
	console.log(value);
});

var asyncEach = function(list,iterator,complete){
	//keep track of how many items are done
	var counter = 0;
	//loop through list
	list.forEach(function(item,index){
		console.log("starting item ", item);
		//for each item...
		//  call iterator
		iterator(item,function(){
			console.log("done iwth item ", item);
		//ad one of the total processed items
			counter++;
			console.log("Currently completed ", counter);
		//	if counter == # of items, call complete
				if (counter == list.length){
					console.log("all items are complete");
				complete();
			}
		});
	
	}); 
	
	
	
};

var names = ["Alice","Bob","Carla"];

asyncEach(names,function(name,callback){
	wait(name, function(err,data){
		console.log(data);
		callback();	
	});
	},function(){
		console.log("Goodbye!");
	});

/**
 * @author Michael
 */

var adder = function(first){
	return function(second){
		return first + second;
	}
};

var add5 = adder(5);
var result = add5(10);//15

console.log("add5 + 10 ", result);


//@param list An array to be processed
//@param f A function called on each item
var each = function(list, f){
	//Loop through list
	for (var i=0; i < list.length; i++) {
	  //f is passed an item and its index
	 	var item = list[i];
	 	f(item, i); 
	}
	//f is passed an item and its index
};

var names = ["Alice","Bob","Carla"];
var greet = function(name, index){
	console.log(arguments);
	console.log("Hello, " + name + "(" + index + ")")
}

each(names, greet);

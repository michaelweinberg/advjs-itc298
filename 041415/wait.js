/**
 * @author Michael
 * 
 */

// var timeOut = Math.random(Math.random()*1000);

var wait = function(input,callback){
	setTimeout(function(){
		callback(null, input);
	}, Math.random(Math.random()*1000));
};

module.exports = wait;

//map
//do something to each list item and output the change to each item, [a,b,c] ->[a*,b*,c*]
//reduce
//do one thing with all the items [a,b,c]->d

/*control flow of async-
	
* */

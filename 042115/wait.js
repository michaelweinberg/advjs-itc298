var wait = function(arg,callback){
	var delay = Math.round(Math.random()*1000);
	setTimeout(function(){
		callback(null, arg);
	},delay);
};

module.exports = wait;

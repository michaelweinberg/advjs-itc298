/**
 * @author Michael
 */

var hapi = require("hapi");

var server = new hapi.Server();
server.connection({
	port:8080
});

server.start(function(){
	console.log(server.info);
});

var counter = 0;

server.route({
	method: "GET",
	path: "/{name?}",
	handler: function(request, reply){
		//console.log(request.header);
	var name = request.params.name || "Anonymous";
		console.log(request.params);
		counter++;
		reply("Hello, " + name +  " from Hapi.js" + counter);
	}
});

server.route({
	method: "GET",
	path: "/{name}/{id}",
	handler: function(request, reply){
		reply(request.params.name + " | " + request.params.id);
	}
});

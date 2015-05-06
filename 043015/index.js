/**
 * @author Michael
 */
var hapi = require("hapi");
var fortunes = require("./fortunes");
var server = new hapi.Server();

server.connection({
	port:8000
});
server.start();

server.views({
	engines: {
		html: require("handlebars")
	},
	path: "templates",
	isCached: false
})

server.route({
	method: "GET",
	path: "/",
	handler: function(request, reply){
		reply.view("index");
	}
});

server.route({
	method: "GET",
	path: "/fortune",
	handler: function(request, reply){
	var random = Math.round(Math.random()*11);
		reply.view("fortune.html", {
			fortune:fortunes.fortunes[random]
		});
		console.log(random)
	}
});

server.route({
	method: "GET",
	path: "/fortune/{x}",
	handler: function(request, reply){
	var whichFortune = request.params.x;
		if (whichFortune <=fortunes.fortunes.length){
			reply.view("fortune.html", {fortune:fortunes.fortunes[whichFortune]});
		}else{
		// reply.view("fortune.html", {fortune:"Please enter a number between 0 and 11"});
		var response = reply("redirecting...");
		response.statusCode(302);
		response.header("Location", "/fortune");
		}
	}
		
});


//Math.round(Math.random()*20)

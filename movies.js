// You should have an index page that provides a description of the application, individual listing pages for each type of media you want to lend out (books, DVDs, CDs, etc.), and (if you feel up to it) a detail page that lets the user see additional information about a specific item (i.e. page count, track listings, cast and crew).


/**
 * @author Michael
 */
var fs = require("fs");
var hapi = require("hapi");
var handlebars = require("handlebars");
var server = new hapi.Server();

server.connection({
	port:8000
});
server.start();


server.route({
	method: "GET",
	path: "/",
	handler: function(request, reply){
		reply.view("index",{
			title:"home"
		});
	}
});

server.route({
	method:"GET",
	path: "/assets/{params*}",
	handler: {
		directory:{
			path:"public"
		}
	}
});

server.route({
	method:"GET",
	path: "/movies",
	handler: function(request, reply){
		fs.readFile("movies.json", "utf8", function(err,data){
			reply.view("other-stuff", {
			title: "Media",
			media: JSON.parse(data)
			});
		});
		
	}
});

server.route({
	method: "GET",
	path: "/movies/{index}",
	handler: function(request, reply){
	// var page = request.params.x;
	
		// if (page <=fortunes.fortunes.length){
			fs.readFile("movies.json", "utf8", function(err,data){
				data = JSON.parse(data);
				var item = data[req.params.index];
			reply.view("movie-view", {
			title: "Hello",
			info: item
			});
			
		// }else{
		// reply.view("fortune.html", {fortune:"Please enter a number between 0 and 11"});
		// // var response = reply("redirecting...");
		// // response.statusCode(302);
		// // response.header("Location", "/fortune");
		// }
		});
	}
		
});



server.views({
	path:"templates",
	engines:{
		html:require("handlebars")
	},
	layoutPath: "layouts",
	layout: "default",
	partialsPath: "templates/partials",
	isCached:false
});

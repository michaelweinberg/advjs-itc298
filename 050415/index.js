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
	path: "/other-stuff",
	handler: function(request, reply){
		fs.readFile("classes.json", "utf8", function(err,data){
			reply.view("other-stuff", {
			title: "Other Stuff",
				classes: JSON.parse(data)
			});
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

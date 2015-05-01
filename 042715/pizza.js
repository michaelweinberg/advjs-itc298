//pizza.js

var orders = require("./orders");
var hapi = require("hapi");
var server = new hapi.Server();
server.connection({
	port:8080
});

server.start();
server.views({
	path:"templates",
	engines:{
		html:require("handlebars")
	},
	isCached:false
});

server.route({
	method:"GET",
	path:"/{name?}",
	handler: function(req,reply){
		var name = req.params.name || "Anon";
		reply.view("index.html", {
			user:name,
			pizzas: orders.pizzas
		});
	}
});

server.route({
	method:"POST",
	path:"/order",
	handler: function(req,reply){
		orders.add(req.payload);
		
			reply.view("index.html", {
				pizzas:orders.pizzas
			});
		}
});

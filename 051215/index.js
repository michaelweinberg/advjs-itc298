
var hapi = require("hapi");
var server = new hapi.Server();
server.connection({port:8000});
server.start();

server.route({
	method:"GET",
	path:"/",
	handler:function(req,reply){
		reply.view("index");
	}
});

server.route({
	method:"GET",
	path: "/assets/{params*}",
	handler: {
		directory:{
			path:"build"
		}
	}
});

server.views({
	path:".",
	engines:{
		html:require("handlebars")
	},
	isCached:false
});
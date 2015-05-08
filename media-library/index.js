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
			title:"Home"
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

//begin books
server.route({
	method:"GET",
	path: "/movies",
	handler: function(request, reply){
		fs.readFile("media-items.json", "utf8", function(err,data){
			var list = JSON.parse(data);
			reply.view("movie-list", {
			title: "Media",
			movies: list.movies
			});
		});
	}
});

server.route({
	method: "GET",
	path: "/movies/{index}",
	handler: function(request, reply){
			fs.readFile("media-items.json", "utf8", function(err,data){
				data = JSON.parse(data);
				var item = data.movies[request.params.index];
				reply.view("movie-view", {
			title: "Hello",
			loop: item 
			});
		});
	}	
});
//end books

//begin movies
server.route({
	method:"GET",
	path: "/books",
	handler: function(request, reply){
		fs.readFile("media-items.json", "utf8", function(err,data){
			var list = JSON.parse(data);
			reply.view("book-list", {
			title: "Books",
			books: list.books
			});
		});		
	}
});

server.route({
	method: "GET",
	path: "/books/{index}",
	handler: function(request, reply){
			fs.readFile("media-items.json", "utf8", function(err,data){
				data = JSON.parse(data);
				var item = data.books[request.params.index];
			reply.view("book-view", {
			title: "Hello",
			loop: item
			});
		});
	}	
});
//end movies

//begin albums
server.route({
	method:"GET",
	path: "/albums",
	handler: function(request, reply){
		fs.readFile("media-items.json", "utf8", function(err,data){
			var list = JSON.parse(data);
			reply.view("album-list", {
			title: "Books",
			albums: list.albums
			});
		});		
	}
});

server.route({
	method: "GET",
	path: "/albums/{index}",
	handler: function(request, reply){
			fs.readFile("media-items.json", "utf8", function(err,data){
				data = JSON.parse(data);
				var item = data.albums[request.params.index];
			reply.view("album-view", {
			title: "Hello",
			loop: item
			});
		});
	}	
});
//end albums

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

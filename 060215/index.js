/*
 view -templates go here
 handlers -controllers
 models -backbone models
 * */
var hapi = require("hapi");
var server = new hapi.Server();
server.connection({port:8000});

server.views({
	engines:{
		html:require("handlebars")
	},
	path: "./views",
	isCached:false
});

var Reminder = require("./models/reminder");

var sql = require("./database");
sql.init(function(){
	console.log("database ready");
	var reminder = new Reminder({
		task: "Start server"
	});
	reminder.create(function(err){
		if(err){
			console.error(err);
		}
		sql.connection.all("SELECT * FROM reminders", function(err,results){
			console.log(err,results);
		});
	});
	server.start();
});

var routes = require("./routes");
server.route(routes);
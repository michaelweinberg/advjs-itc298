//server.js

var users = {
	mike:"12345",
	admin:"admin"
};
var sqlite = require("sqlite3");
var hapi = require("hapi");

var server = new hapi.Server();
server.connection({port:8000});

var db = new sqlite.Database("auth.db",function(){
	//table has two columns- user and sessionID
	db.run("CREATE TABLE IF NOT EXISTS auth (username, session)",
	function(){
		console.log("starting server");
		server.start();
	});
});

server.route({
	method:"GET",
	path:"/",
	handler:function(req,reply){
		console.log(req.state);
		if(!req.state.username){
			console.log("no user");
			return reply.redirect("/login");
		}
		db.get("SELECT * FROM auth WHERE username = $user",{
			$user:req.state.username
		},function(err,result){
			console.log(err);
			console.log(req.state.username);
			if(!result){
				console.log("no result");
				return reply.redirect("/login");
			}
			if(result.session != req.state.session){
				console.log("no session");
				return reply.redirect("/login");
			}
			reply("it is a mystery");
			console.log("logged in");
		});
	}
});

server.route({
	method:"GET",
	path:"/login",
	handler:function(req,reply){
		reply(
			"<form method=POST>" +
			"<input name =user placeholder=user/>" +
			"<input name =password placeholder=password/>" +
			"<input type = submit>"+
			"</form>"
			);	
	}
});

server.route({
	method:"POST",
	path:"/login",
	handler:function(req,reply){
		var expected = users[req.payload.user];
		if (req.payload.password == expected){
			var response = reply("hello, " + req.payload.user);
			var id = Date.now();
			response.state("username", req.payload.user);
			response.state("session", id + "");
			console.log(response.request.state.username);
			
			db.run("DELETE FROM auth where USERNAME = $user", {
				$user:req.payload.user
			},function(){
				db.run("INSERT INTO auth VALUES ($user, $session)",{
					$user:req.payload.user,
					$session:id
				});
			});
		}else{
			reply.redirect("/login");
		}
	}
});
//EOF

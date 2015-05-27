var sqlite = require("sqlite3");
var db = new sqlite.Database("serial.db");
var async = require("async");

async.waterfall([
	function(c){
		db.run("CREATE TABLE IF NOT EXISTS test(x,y)", c);
	},
	function(c){
		 db.run("INSERT INTO test VALUES($x, $y)",{
		 	$x:3,
		 	$y:4
		 },c);
	},
	function(c){
		db.all("SELECT * FROM test", c);
	},
	function(results,c){
		console.log(results);
	}
]);

//NON ASYNC VERSION
// db.run("CREATE TABLE IF NOT EXISTS test(x,y)",function(){
	// db.run("INSERT INTO test VALUES($x, $y)",{
		// $x:1,
		// $y:2
	// },function(){
		// db.all("SELECT * FROM test", function(err,results){
			// console.log(results);
		// });
	// });
// });


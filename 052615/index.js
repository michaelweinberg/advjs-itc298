var sqlite = require("sqlite3");
var db = new sqlite.Database("test.db", function()
{
	// db.run("CREATE TABLE IF NOT EXISTS people (name, age, title);");
  //this function is run when the query completes
  db.run("INSERT INTO people VALUES ('Alice', 27, 'District Manager');");
  db.run("INSERT INTO people VALUES ('Bob', 23, 'Assistant to the District Manager');");
  
  db.get("SELECT * FROM user",function(err,result){
  	console.log(result);
  });
	
	
	
	var query = "INSERT INTO user ($name, $age);";
	db.run(query, {
		$name:"Alice",
		$age:"42"
	},function(){
		console.log("this is done");
	});
	
	var statement = db.prepare(query);
	statement.run({
		$name:"Bob",
		$age:20
	});
	
	db.all("SELECT * FROM users", function(err,results){
		console.log(results);
	});

});
	


var Backbone = require("backbone");
var sql = require("../database");
var Reminder = Backbone.Model.extend({
	defaults:{
		task:"",
		complete:false
	},
	create: function(callback){
		callback = callback || function(){};
		//get its own data
		var data = this.toJSON();
		//run an insert on the database
		var q = "INSERT INTO reminders(task,complete) VALUES ($task,$complete);";
		//pass in its data
		sql.connection.run(q,{
			$task:data.task,
			$complete:data.complete
		}, callback);
		//when done, call the callback
	}
});

var reminder = new Reminder();
console.log(reminder.toJSON());

module.exports = Reminder;

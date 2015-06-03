var ReminderList = require("../models/reminderList");
require("../models/reminderList");

module.exports = function(req,reply){
	var list = new ReminderList();
		list.load(function(){
			var data = list.toJSON();
			console.log(data);
		reply.view("home",{
			test: "it's alive",
			reminders: data
		});
	});
};

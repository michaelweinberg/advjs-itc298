var CalculatorView = Backbone.View.extend({
				el:".calculator",
				initialize:function(){
					this.listenTo(this.model, "change:result",this.render);
				},
				events:{
					"keyup .input": "updateInput",
					"click .operation": "runOperation"
				},
				template:_.template($("#calc-template").html()),
				render:function(){
					//get data from model
					var model = this.model.toJSON();
					//put the current data into this template
					var html = this.template(model);
					//set the contents of the element to be that html
					//this.$el is created by jquery from our el: key
					//set the contents of our div = to the output of the template
					this.$el.html(html);
				},
				updateInput: function(e){
					var value = e.target.value;
					console.log(this.model);
					this.model.set("input", Number(value));
					console.log("update");
				},
				runOperation: function(e){
// 					this does the same thing as .data - all data attributes have this option in jQuery
					// var op = $(e.target).attr("data-op");
					var op = $(e.target).data("op");
					this.model.doMath(op);
					console.log("run op");
				}
			});
			
			
module.exports = CalculatorView;


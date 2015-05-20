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
					var model = this.model.toJSON();
					var html = this.template(model);
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


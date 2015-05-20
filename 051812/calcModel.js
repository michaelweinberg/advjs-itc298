var CalculatorModel = Backbone.Model.extend({
				defaults:{
					result:0,
					input:0
				},
				doMath:function(operation){
					//get the current value
					var value = this.get("result");
					//get the input value
					var input = this.get("input");
					//add, subtract, multiply or divide
					if(operation == "add"){
						var output = value + input;
					}
					//set the result
					this.set("result", output);	
				}
			});




module.exports = CalculatorModel;
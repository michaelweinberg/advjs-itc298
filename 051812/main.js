var CalculatorModel = require("./calcModel");
var CalculatorView = require("./calcView");
		var calc = new CalculatorModel();
			calc.on("change:result", function(){
				console.log(calc.toJSON());
			});
			
			
			
			var view = new CalculatorView({
				model:calc
			});
			
			view.render();
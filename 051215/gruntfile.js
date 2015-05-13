//

module.exports = function(grunt){
	
	grunt.registerTask("hello",
	function(){
	console.log("hello from grunt");
	grunt.file.write("build/test.txt", "This file is written sync");
	});
	

	grunt.registerTask("hi", ["hello"]);
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-concurrent");
	grunt.loadNpmTasks("grunt-nodemon");
	
	grunt.registerTask("default", ["autoprefixer","concurrent"]);
	grunt.initConfig({
		concurrent:{
			dev:{
				tasks:["watch","nodemon"],
				options:{
					logConcurrentOutput:true
				}
			}
		},
		
		nodemon:{
				dev:{
					script:"index.js"
				}
		},
		watch: 
			{
			options:{
				livereload:true
			},
				
			prefix: {
				files: "src/css/**/*.css",
				tasks: ["autoprefixer"]
			},
			template:{
				files:"**/*.html",
				tasks:["hello"]
			}
		},
		autoprefixer: {
			dev: {
				expand: true,
				flatten: true,
				src: "src/css/**/*.css",
				dest: "build/css/"
			}
		}
	});
	
};

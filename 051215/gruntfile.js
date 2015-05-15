//

module.exports = function(grunt){
	
	// grunt.registerTask("hello",
	// function(){
	// console.log("hello from grunt");
	// grunt.file.copy("src/images/**/*.png", "build/images");
	// });
	

	grunt.registerTask("hi", ["hello"]);
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-concurrent");
	grunt.loadNpmTasks("grunt-nodemon");
	grunt.loadNpmTasks("grunt-contrib-copy");
	

	grunt.registerTask("default", ["autoprefixer","concurrent"]);
	grunt.initConfig({
		copy:{
			 files: {
			    cwd: 'src/images/',  // set working folder / root to copy
			    src: '**',           // copy all files and subfolders
			    dest: 'build/images',    // destination folder
			    expand: true           // required when using cwd
  }
		},
		
		concurrent:{
			dev:{
				tasks:["watch","nodemon","copy"],
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
			},
			images:{
				files:"src/images/**",
				tasks:["copy"]
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

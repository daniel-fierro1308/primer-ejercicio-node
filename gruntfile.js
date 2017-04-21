module.exports = function(grunt) {

 grunt.initConfig({
   less: {
 	development: {
   	options: {
     	paths: ['assets/css']
   	},
   	files: {
     	'src/css/main.css': 'src/less/base.less'
   	}
 	}
},

express: {
      options: {
        // Override defaults here 
      },
      dev: {
        options: {
          script: 'app.js'
        }
      }
    },

reload: {

    port : 8000,
            proxy: {
              host: 'localhost',
            }
        }, 

   watch: {
      options :{
        spawn: false,
        livereload: true
      },
      files: ['src/less/**/*.less'],
      tasks: ['dev', 'reload']
    }
 });
grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-reload');

  grunt.registerTask('default', ['dev','watch']);
  grunt.registerTask('dev', ['less:development','express:dev','watch']);

};
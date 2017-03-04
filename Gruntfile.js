module.exports = function(grunt) {

  	grunt.initConfig({
      // less: {
      //   development: {
      //     options: {
      //       compress: true,
      //       yuicompress: false,
      //       optimization: 2
      //     },
      //     files: {
      //       "public/css/main.css": "public/less/main.less" // destination file and source file
      //     }
      //   }
      // },
  		concat: {
        css: {
          src: ['assets/home.css'],
          dest: 'dist/home.min.css'
        }
      },
      // watch: {
      //     css: {
      //       tasks: ['concat'],
      //       files: ['assets/*.css']
      //     }
      // }
      // watch: {
      //   styles: {
      //     files: ['public/less/**/*.less'], // which files to watch
      //     tasks: ['less'],
      //     options: {
      //       nospawn: true
      //     }
      //   }
      // }
    });


  	// grunt.loadNpmTasks('../../node_modules/grunt-contrib-less');

    	// grunt.loadNpmTasks('grunt-contrib-less');
      // grunt.loadNpmTasks('../../node_modules/grunt-contrib-concat');

    // grunt.loadNpmTasks('../../grunt-contrib-watch');
  	// grunt.file.setBase('../../');

  // Copy sample file to output location.
  // grunt.registerTask('default', ['concat:css']);

};

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    concat: {
      dist: {
        src: [
          'source/js/jquery-2.1.1.min.js',
          'source/js/*.js'
        ],
        dest: 'public/js/production.js'
      }
    },

    uglify: {
      build: {
        src: 'public/js/production.js',
        dest: 'public/js/production.js'
      }
    },

    less: {
      development: {
        options: {
          compress: true,
          optimization: 2
        },
        files: {
          'public/css/style.css': 'source/less/style.less'
        }
      }
    },
    watch: {
      scripts: {
        files: ['source/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['source/less/*.less'],
        tasks: ['less'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['concat','uglify','less']);
  grunt.registerTask('dev', ['watch']);

};
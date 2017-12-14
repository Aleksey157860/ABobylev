module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
        scripts: {
            src: 'scripts/*.js',
            dest: 'build/js/main.js'
        },
        styles: {
            src: 'sass/**/*.scss',
            dest: 'build/sass/main.scss'
        }
    },

    sass: {
        files: {
          'build/css/main.css': 'sass/**/*.scss',
        }
    },

    qunit: {
      files: ['*.html']
    },

    jshint: {
      files: ['Gruntfile.js', 'scripts/*.js'],
      options: {
          globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    reload: {
        port: 6001,
        proxy: {
            host: 'localhost'
        }
    },

    watch: {
      files: ['*.html', 'sass/**/*.scss', 'scripts/*.js'],
      tasks: ['jshint', 'qunit', 'reload']
    },

    clean: {
        files: [
            'build/**'
        ]
    },

    connect: {
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: ['build']
                }
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', ['clean', 'jshint', 'concat', 'sass']);
  
};
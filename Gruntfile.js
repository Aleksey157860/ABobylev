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
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'build/css/main.css': 'build/sass/main.scss'
            }
        }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  
};
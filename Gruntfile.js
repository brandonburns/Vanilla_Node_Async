'use strict';

module.exports = function(grunt) {
  grunt.initConfig ({
    
    jshint: {
      dev: {
        options: {
          node: true,
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true
          }
        },
        src: ['Gruntfile.js', 'index.js', 'server.js', 'router.js', 
          'reqHandle.js', 'test/test.js']
      }
    },

    simplemocha: {
      all: {
        src: ['test/*.js']
      }
    },

    jscs: {
      all: {
        options: {
          "preset": "google"
        },
        files: {
          src: ['Gruntfile.js', 'index.js', 'server.js', 'router.js', 
          'reqHandle.js', 'test/test.js']
        }
      }
    }
  });

   grunt.loadNpmTasks('grunt-simple-mocha');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-jscs');

   grunt.registerTask('test', ['jshint:dev', 'simplemocha:all', 'jscs:all']);
   grunt.registerTask('default', ['test']);

};
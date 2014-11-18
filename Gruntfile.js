module.exports = function( grunt ) {
	'use strict';

	// Load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),

		// sass: {
		// 	all: {
		// 		options: {
		// 			compass: true
		// 		},
		// 		files: {
		// 			'assets/css/style.css': 'assets/scss/normalize.scss'
		// 		}
		// 	}
		// },

  sass: {
    dist: {
      files: {
        'assets/css/style.css': 'assets/scss/foundation.scss'
      }
    }
  },

		watch: {
			// grunt: { files: ['Gruntfile.js'] },

			sass: {
				files: 'assets/scss/**/*.scss',
				tasks: ['sass']
			}
		},

		bowercopy: {
			foundation: {
				options: {
					destPrefix: 'assets',
					srcPrefix: 'bower_components'
				},
				files: {
					'js': 'foundation/js/*',
					// 'js/foundation.min.js': 'foundation/js/foundation.min.js',
					// 'js/modernizr.js': 'modernizr/modernizr.js',
					// 'scss/_settings.scss': 'foundation/scss/foundation/_settings.scss'
					'css': 'foundation/css/*',
					'scss': 'foundation/scss/*'
				}
			}
		}
	} );

	// Default task.
	grunt.registerTask( 'default', ['sass'] );
	grunt.registerTask( 'grunt-bowercopy', ['bowercopy'] );
	grunt.registerTask( 'grunt-watch', ['watch'] );

	grunt.util.linefeed = '\n';
};

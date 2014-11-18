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
			options: {
				includePaths: ['bower_components/foundation/scss']
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				},
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
					'scss/foundation/_functions.scss': 'foundation/scss/foundation/_functions.scss',
					'scss/_settings.scss': 'foundation/scss/foundation/_settings.scss',
					'scss/foundation.scss': 'foundation/scss/foundation.scss',
					'css': 'foundation/css/*'
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

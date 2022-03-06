module.exports = function (grunt) {

    // -- Config -------------------------------------------------------------------

    grunt.initConfig({

        nick : 'pure',
        pkg  : grunt.file.readJSON('package.json'),

        // -- Clean Config ---------------------------------------------------------

        clean: {
            build: ['build/*'],
        },

        // -- Sass Config --------------------------------------------------------

        sass: {
            dist: {      
                options: {
                    sourcemap: false,
                },
                files: [{
                    "build/bundle.css": "src/bundle.scss",
                    "build/inner-moon.css": "src/inner-moon/default.scss",
                    "build/inner-moon-reversed.css": "src/inner-moon/reversed.scss",
                    "build/classic.css": "src/classic/default.scss",
                    "build/classic-reversed.css": "src/classic/reversed.scss",
                    "build/lightbulb.css": "src/lightbulb/default.scss",
                    "build/lightbulb-reversed.css": "src/lightbulb/reversed.scss",
                    "build/dark-side.css": "src/dark-side/default.scss",
                    "build/dark-side-reversed.css": "src/dark-side/reversed.scss",
                }]
            }
          },

        // -- PostCSS Config --------------------------------------------------------

        postcss: {
            dist: {
                options: {
                    processors: [
                        require('autoprefixer')()
                    ]
                },
                src: './build/*.css'
            }

        },

        css_purge: {
			dist: {
				options: {},
                files: [{
                    expand: true,
                    cwd: "build",
                    src: '*.css',
                    dest:"build/",
                    ext: '.min.css',
                }]
			},
		},

        // -- Watch/Observe Config -------------------------------------------------

        observe: {
            src: {
                files: 'src/**/css/*.css',
                tasks: ['test', 'suppress', 'build'],

                options: {
                    interrupt: true
                }
            }
        }
    });

    // -- Main Tasks ---------------------------------------------------------------

    // npm tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-css-purge');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    // Local tasks.
    // grunt.loadTasks('tasks/');

    grunt.registerTask('default', ['clean', 'build']);
    // grunt.registerTask('test');
    grunt.registerTask('build', [
        'sass',
        'postcss',
        'css_purge',
    ]);

    // Makes the `watch` task run a build first.
    grunt.renameTask('watch', 'observe');
    grunt.registerTask('watch', ['default', 'observe']);

    grunt.registerTask('release', [
        'default',
    ]);

};
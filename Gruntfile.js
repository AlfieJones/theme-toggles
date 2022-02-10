module.exports = function (grunt) {

    // -- Config -------------------------------------------------------------------

    grunt.initConfig({

        nick : 'pure',
        pkg  : grunt.file.readJSON('package.json'),

        // -- Clean Config ---------------------------------------------------------

        clean: {
            build    : ['build/'],
            build_res: ['build/*-r.css'],
            release  : ['release/<%= pkg.version %>/']
        },

        // -- Sass Config --------------------------------------------------------

        sass: {
            dist: {      
                options: {
                    sourcemap: false,
                },
                files: [{
                    "build/bundle.css": "src/bundle.scss",
                    "build/base.css": "src/base/index.scss",
                    "build/inner-moon.css": "src/inner-moon/index.scss",
                    "build/classic.css": "src/classic/index.scss",
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

        // -- CSSMin Config --------------------------------------------------------

        cssmin: {
            options: {
                noAdvanced: true
            },

            files: {
                expand: true,
                src   : 'build/*.css',
                ext   : '-min.css'
            }
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
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    // Local tasks.
    // grunt.loadTasks('tasks/');

    grunt.registerTask('default', ['build']);
    // grunt.registerTask('test');
    grunt.registerTask('build', [
        'sass',
        'postcss',
        "cssmin"
    ]);

    // Makes the `watch` task run a build first.
    grunt.renameTask('watch', 'observe');
    grunt.registerTask('watch', ['default', 'observe']);

    grunt.registerTask('release', [
        'default',
    ]);

};
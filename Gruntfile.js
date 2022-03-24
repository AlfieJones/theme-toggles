const files = ["inner-moon", "classic", "lightbulb", "dark-side", "expand", "within", "horizon", "eclipse", "simple", "dark-inner", "half-sun", "around"]

module.exports = function (grunt) {

    // -- Config -------------------------------------------------------------------

    const config = {

        nick : 'pure',
        pkg  : grunt.file.readJSON('package.json'),

        // -- Clean Config ---------------------------------------------------------

        clean: {
            build: ['css'],
        },

        // -- Sass Config --------------------------------------------------------

        sass: {
            dist: {      
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['css/temp/toggles/*.scss'],
                    dest: './css/',
                    ext: '.css'
                  }],
            }
          },

        // -- Concat Config --------------------------------------------------------

        concat: {
            bundle: {
                src: ['src/toggles/*.scss', 'src/base.scss'],
                dest: 'css/temp/toggles/bundle.scss',
            },
        },

        // -- PostCSS Config --------------------------------------------------------

        postcss: {
            dist: {
                options: {
                    processors: [
                        require('autoprefixer')()
                    ]
                },
                src: './css/*.css'
            }

        },

        css_purge: {
			dist: {
				options: {},

                files: [{
                    expand: true,
                    cwd: "css/",
                    src: '*.css',
                    dest:"css/",
                    ext: '.min.css',
                }]
			},
		},

        cssmin: {
            options: {
                sourceMap: false,
            },
            target: {
              files: [{
                expand: true,
                cwd: "css/",
                src: '*.css',
                dest:"css/",
                ext: '.min.css',
              }]
            }
          },

        copy: {
            main: {
              files: [
                {expand: true, flatten: true,  src: ['src/variables.scss', 'src/utils.scss'], dest: 'css/temp'},
              ],
            },
          },

        // -- Watch/Observe Config -------------------------------------------------

        observe: {
            src: {
                files: 'src/**/*.scss',
                tasks: ['build'],

                options: {
                    interrupt: true
                }
            }
        }
    };

    files.forEach((name) => {
        config.concat[name] = {
            src: [`src/toggles/${name}.scss`, `src/base.scss`],
            dest: `css/temp/toggles/${name}.scss`,
        };
    })


    grunt.initConfig(config);

    // -- Main Tasks ---------------------------------------------------------------

    // npm tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['clean', 'build']);
    
    grunt.registerTask('build', [
        'copy',
        'concat',
        'sass',
        'postcss',
        'cssmin',
    ]);

    // Makes the `watch` task run a build first.
    grunt.renameTask('watch', 'observe');
    grunt.registerTask('watch', ['default', 'observe']);

    grunt.registerTask('release', [
        'default',
    ]);

};
const files = ["inner-moon", "classic", "lightbulb", "dark-side", "expand", "within", "horizon", "eclipse", "simple", "dark-inner", "half-sun", "around"]

module.exports = function (grunt) {

    // -- Config -------------------------------------------------------------------

    const config = {

        nick : 'pure',
        pkg  : grunt.file.readJSON('package.json'),

        // -- Clean Config ---------------------------------------------------------

        clean: {
            build: ['css'],
            react: ['css/react', 'css/temp/react']
        },

        // -- Sass Config --------------------------------------------------------

        sass: {
            build: {      
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['css/temp/toggles/*.scss'],
                    dest: './css/',
                    ext: '.css'
                  }],
            },
            react: {      
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['css/temp/react/toggles/*.scss'],
                    dest: './css/react',
                    ext: '.css'
                  }],
            }
          },
        // -- Concat Config --------------------------------------------------------

        concat: {
            react: {
                files: [{
                    'css/temp/react/toggles/bundle.scss': ['src/variants/react.scss', 'src/toggles/*.scss', 'src/base.scss'],
                }],
            },
            build: {
                files: [{
                    'css/temp/toggles/bundle.scss': ['src/toggles/*.scss', 'src/base.scss'],
                }],
            }
        },

        // -- PostCSS Config --------------------------------------------------------

        postcss: {
            build: {
                options: {
                    processors: [
                        require('autoprefixer')()
                    ]
                },
                src: './css/*.css'
            },
            react: {
                options: {
                    processors: [
                        require('autoprefixer')()
                    ]
                },
                src: './css/react/*.css'
            }
        },

        css_purge: {
			build: {
				options: {},

                files: [{
                    expand: true,
                    cwd: "css/",
                    src: '*.css',
                    dest:"css/",
                    ext: '.min.css',
                }]
			},
            react: {
				options: {},

                files: [{
                    expand: true,
                    cwd: "css/react/",
                    src: '*.css',
                    dest:"css/react/",
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
                    cwd: "css/react/",
                    src: '*.css',
                    dest:"css/react/",
                    ext: '.min.css',
                },
                {
                    expand: true,
                    cwd: "css/",
                    src: '*.css',
                    dest:"css/",
                    ext: '.min.css',
                }]
            }
          },

        copy: {
            build: {
              files: [
                {expand: true, flatten: true,  src: ['src/variables.scss', 'src/utils.scss', 'src/variants/react.scss'], dest: 'css/temp'},
              ],
            },
            react: {
                files: [
                  {expand: true, flatten: true,  src: ['src/variables.scss', 'src/utils.scss', 'src/variants/react.scss'], dest: 'css/temp/react'},
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
        config.concat.react.files.push({
            src: [ 'src/variants/react.scss', `src/toggles/${name}.scss`, `src/base.scss`],
            dest: `css/temp/react/toggles/${name}.scss`,
        });
        config.concat.build.files.push({
            src: [`src/toggles/${name}.scss`, 'src/base.scss'],
            dest: `css/temp/toggles/${name}.scss`,
        });
    });


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

    grunt.registerTask('default', ['build', 'react']);
    
    grunt.registerTask('build', [
        'clean:build',
        'copy:build',
        'concat:build',
        'sass:build',
        'postcss:build',
        'cssmin',
    ]);

    grunt.registerTask('react', [
        'clean:react',
        'copy:react',
        'concat:react',
        'sass:react',
        'postcss:react',
        'cssmin',
    ]);

};
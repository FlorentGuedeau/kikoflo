module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['sass:dist', 'postcss:dist']
            },
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'compressed',
                    compass: true
                },
                files: {                         // Dictionary of files
                    'html/stylesheets/main.css': 'sass/main.scss',       // 'destination': 'source',
                    //                    'html/stylesheets/landing.css': 'sass/landing.scss',       // 'destination': 'source',
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'html/stylesheets/main.css'
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'html/images/',                   // Src matches are relative to this path
                    src: ['*.{png,jpg,jpeg,gif}'],   // Actual patterns to match
                    dest: 'html/images/compressed'                  // Destination path prefix
                }]
            }
        },
        csscomb: {
            dist: {
                files: {
                    'html/stylesheets/resorted-main.css': ['html/stylesheets/main.css']
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: false
            },
            target: {
                files: {
                    'html/stylesheets/compressed-main.css': ['html/stylesheets/main.css']
                }
            }
        },
        rem_to_px: {
            options: {
                baseFontSize: 10, // 1rem = 10px
                removeFontFace: true,
            },
            dist: {
                src: ['html/stylesheets/main.css'],
                dest: 'html/stylesheets/ie/'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin'); // https://github.com/gruntjs/grunt-contrib-cssmin
    grunt.loadNpmTasks('grunt-csscomb'); // https://github.com/csscomb/grunt-csscomb
    grunt.loadNpmTasks('grunt-contrib-sass'); // https://github.com/gruntjs/grunt-contrib-sass
    grunt.loadNpmTasks('grunt-postcss'); // https://github.com/postcss/autoprefixer
    grunt.loadNpmTasks('grunt-contrib-imagemin'); // https://github.com/gruntjs/grunt-contrib-imagemin
    grunt.loadNpmTasks('grunt-contrib-watch'); // https://github.com/gruntjs/grunt-contrib-watch /// http://blog.grayghostvisuals.com/grunt/image-optimization/
    grunt.loadNpmTasks('grunt-rem-to-pixels'); // https://github.com/lohmander/grunt-rem-to-px

    grunt.registerTask('default', ['sass:dist', 'postcss:dist', 'csscomb:dist', 'cssmin', 'rem_to_px', 'imagemin', 'watch']);
    //    grunt.registerTask('default', ['sass:dist', 'postcss:dist', 'rem_to_px', 'watch']);
};

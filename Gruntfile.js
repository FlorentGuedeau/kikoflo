module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['sass:dist', 'postcss:dist']
            },
            livereload: {
                files: ['html/*.html', 'html/*.php', 'html/javascripts/**/*.{js,json}', 'html/stylesheets/*.css','html/images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    //style: 'compressed',
                    compass: true
                },
                files: {                         // Dictionary of files
                    'html/stylesheets/main.css': 'sass/main.scss',       // 'destination': 'source',
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
                src: 'html/stylesheets/*.css'
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
    });

    grunt.loadNpmTasks('grunt-contrib-sass'); // https://github.com/gruntjs/grunt-contrib-sass
    grunt.loadNpmTasks('grunt-postcss'); // https://github.com/postcss/autoprefixer
    grunt.loadNpmTasks('grunt-contrib-imagemin'); // https://github.com/gruntjs/grunt-contrib-imagemin
    grunt.loadNpmTasks('grunt-contrib-watch'); // https://github.com/gruntjs/grunt-contrib-watch /// http://blog.grayghostvisuals.com/grunt/image-optimization/
    grunt.registerTask('default', ['sass:dist', 'postcss:dist', 'imagemin', 'watch']);
};
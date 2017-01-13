module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['sass:dist', 'postcss:dist']
            },
            coffee: {
                files: ['coffeescripts/**/*.coffee'],
                tasks: ['coffee']
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
                    style: 'nested',
                    compass: true
                },
                files: {                         // Dictionary of files
                    'html/stylesheets/main.css': 'sass/main.scss',       // 'destination': 'source',
                    'html/stylesheets/ie9.css': 'sass/ie9.scss',       // 'destination': 'source'
                    'html/stylesheets/editor-style.css': 'sass/editor-style.scss'       // 'destination': 'source'
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
        coffee: {
            compile: {
                files: [{
                    expand: true,
                    cwd: 'coffeescripts',
                    src: '{,*/}*.{coffee,litcoffee,coffee.md}',
                    dest: 'html/javascripts',
                    ext: '.js'}
                       ]
                /*{
          'html/javascripts/global.js': ['coffeescript/*.coffee'] // compile and concat into single file
        }*/
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass'); // https://github.com/gruntjs/grunt-contrib-sass
    grunt.loadNpmTasks('grunt-postcss'); // https://github.com/postcss/autoprefixer
    grunt.loadNpmTasks('grunt-contrib-coffee'); // https://github.com/gruntjs/grunt-contrib-coffee
    grunt.loadNpmTasks('grunt-contrib-watch'); // https://github.com/gruntjs/grunt-contrib-watch
    grunt.registerTask('default', ['sass:dist', 'postcss:dist', 'coffee', 'watch']);
};

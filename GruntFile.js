module.exports = function (grunt) {

    grunt.initConfig({
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        src: 'readme.md',
                        dest: 'class-files',
                        ext: '.html',
                        rename: function (dest, src) {
                            if (src == 'readme.html') {
                                src = 'index.html';
                            }
                            return dest + "/" + src;
                        }
                    }
                ]
            }
        }
    });


    grunt.loadNpmTasks('grunt-markdown');
    grunt.registerTask('convert', ['markdown']);
};
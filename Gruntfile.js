module.exports = function (grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-less');
	
	grunt.initConfig({
		less: {
			dev: {
				options: {
					paths: ['less']
				},
				files: {
					'css/bootstrap-sidebar.css': 'less/*.less'
				}
			}
		}
	});
	
	grunt.registerTask('default', ['less:dev']);
};

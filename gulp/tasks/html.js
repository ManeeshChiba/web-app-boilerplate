'use strict';

var gulp     	 = require('gulp'),
	gulpif		 = require('gulp-if'),
	revReplace = require('gulp-rev-replace'),
	handleErrors = require('../util/handleErrors');

var manifest = gulp.src("./src/maps/rev-manifest.json");

// Compiles HTML includes
gulp.task('html', function() {

  return gulp.src(['src/*.html'])
	.pipe( gulpif(global.mode !== 'dev', revReplace({manifest: manifest})))
    .on('error', handleErrors)
    .pipe(gulp.dest(global.destination));
});
var gulp = require('gulp'),
	sass = require('gulp-sass');
	sync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var processors = [
	autoprefixer
];

gulp.task('sass', function() {
	return gulp.src('app/scss/sta.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss(processors))
	.pipe(gulp.dest('dist/assets/styles'))
});

gulp.task('php', function() {
	return gulp.src('app/**/*.php')
	.pipe(gulp.dest('dist/'))
});

gulp.task('build', ['default', 'php']);

gulp.task('default', ["sass"], function () {
  gulp.watch('app/scss/*.scss', ['sass']);
});

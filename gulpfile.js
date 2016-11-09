var gulp = require('gulp'),
	sass = require('gulp-sass');
	sync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var processors = [
	autoprefixer
];
//SCSS
gulp.task('sass', function() {
	return gulp.src('app/scss/sta.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss(processors))
	.pipe(gulp.dest('dist/assets/styles'))
});

gulp.task('default', ["sass"], function () {
  gulp.watch('app/scss/*.scss', ['sass']);
});

//PHP
gulp.task('php', function() {
	return gulp.src('app/**/*.php')
	.pipe(gulp.dest('dist/'))
});

gulp.task('watch-php', function(){
	gulp.watch('app/**/*.php',['php']);
});

//IMAGES
gulp.task('images', function() {
	return gulp.src('app/images/**/*')
	.pipe(gulp.dest('dist/assets/images'))
});

gulp.task('watch-images', function(){
	gulp.watch('app/images/**/*',['images']);
});

gulp.task('build', ['default', 'watch-php', 'watch-images']);


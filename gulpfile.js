var gulp = require('gulp'),
sass = require('gulp-sass');
sync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var processors = [
autoprefixer
];

gulp.task('sass', function() {
return gulp.src('src/styles/scss/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(postcss(processors))
.pipe(gulp.dest('src/styles'))
});

gulp.task('default', ["sass"], function () {
  gulp.watch('src/css/scss/*.scss', ['sass']);
});

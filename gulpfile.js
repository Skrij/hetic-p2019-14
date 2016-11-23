var gulp = require('gulp'),
    sass = require('gulp-sass');
    sync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var processors = [
    autoprefixer
];
var browserSync = require('browser-sync');
//SCSS
gulp.task('sass', function() {
    return gulp.src('app/scss/sta.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(sync.stream())
});

gulp.task('default', ["sass"], function () {
  gulp.watch('app/scss/*.scss', ['sass']);
});

//PHP
gulp.task('php', function() {
    return gulp.src('app/**/*.php')
    .pipe(gulp.dest('dist/'))
    .pipe(sync.stream())
});

gulp.task('watch-php', function(){
    gulp.watch('app/**/*.php',['php']);
});

//JS
gulp.task('js', function() {
    return gulp.src('app/scripts/*.js')
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(sync.stream())
});

gulp.task('watch-js', function(){
    gulp.watch('app/scripts/*.js',['js']);
});

//IMAGES
gulp.task('images', function() {
    return gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(sync.stream())
});

gulp.task('build', ['default', 'watch-php', 'watch-js','images'], function()
    {
        sync.init({
            proxy: 'lcac.dev/hetic-p2019-14/dist/',
            port: '80'
        })
    });


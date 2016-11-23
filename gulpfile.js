var gulp = require('gulp'),
    sass = require('gulp-sass');
    sync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var processors = [
    autoprefixer
];
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync');


//SCSS et Minfy CSS
gulp.task('sass', function() {
    return gulp.src('app/scss/sta.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(cssnano())
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

//Minify JS
gulp.task('js', function() {
    return gulp.src('app/scripts/*.js')
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(sync.stream())
});

// gulp.task('compress', function (cb) {
//   pump([
//         gulp.src('app/scripts/*.js'),
//         uglify(),

//         gulp.dest('dist/assets/scripts')
//         .pipe(sync.stream())
//     ],
//     cb
//   );
// });

//IMAGES Compress
gulp.task('imagemin', function() {
     gulp.src('app/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images'))
        .pipe(sync.stream())
})

gulp.task('build', ['default', 'php', 'js', 'watch-php', 'imagemin'], function()
{
    sync.init({
        proxy: 'lcac.dev/hetic-p2019-14/dist/',
        port: '80'
    })
});


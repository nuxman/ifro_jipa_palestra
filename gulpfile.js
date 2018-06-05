'use strict';

var gulp = require('gulp');
var markdown = require('gulp-markdown');
var reveal = require('gulp-reveal');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var uglyfly = require('gulp-uglyfly');


gulp.task('webserver', function() {
  gulp.src('./')
     .pipe(webserver({
       livereload: true,
       directoryListting: false,
       fallback: 'index.html',
       open: true,
       host: "0.0.0.0",
       port: 9001

     }));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('./css'));
});

gulp.task('compress', function() {
  gulp.src('lib/*.js')
    .pipe(uglyfly())
    .pipe(gulp.dest('dist'))
});

gulp.task('default', [ 'webserver', 'sass', 'compress' ]);

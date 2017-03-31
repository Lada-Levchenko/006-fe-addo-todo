'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var miniCss = require('gulp-minify-css');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var path = {
  build: {
    css: 'build/css/',
    js: 'build/js/'
  },
  src: {
    style: 'src/style/main.scss',
    js: 'src/js/appreact.js'
  },
  clean: './build'
};

gulp.task('style:build', function () {
    gulp.src(path.src.style)
    .pipe(sass())
    .pipe(autoprefix())
    .pipe(miniCss())
    .pipe(gulp.dest(path.build.css));
});

gulp.task('js:build', function() {
  return browserify(path.src.js)
  .transform('babelify', {
    presets: ["es2015", "react"]
  })
  .bundle()
  .pipe(source('appreact.js'))
  .pipe(gulp.dest(path.build.js));
})

gulp.task('watcher', function () {
  gulp.watch('src/style/**/*.scss', ['style:build']);
  gulp.watch('src/js/**/*.js', ['js:build']);
})

gulp.task('default', function () {
  gulp.run('style:build','js:build', 'watcher');
});

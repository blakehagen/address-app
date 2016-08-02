var gulp         = require('gulp');
var gutil        = require('gulp-util');
var bower        = require('bower');
var concat       = require('gulp-concat');
var sass         = require('gulp-sass');
var less         = require('gulp-less');
var minifyCss    = require('gulp-minify-css');
var rename       = require('gulp-rename');
var sh           = require('shelljs');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var gconcat      = require('gulp-concat');

var paths = {
  less: ['./less/**/*.less']
};

gulp.task('default', ['less']);

// COMPILE LESS --> CSS, CONCAT & MINIFY --> BUILD //
gulp.task('less', function () {
  return gulp.src(paths.less)
    .pipe(plumber())
    .pipe(less())
    .pipe(gconcat('app.min.css'))
    .pipe(minifyCss())
    .pipe(autoprefixer({browsers: ['last 2 version', '> 5%']}))
    .pipe(gulp.dest('./www/css/'));
});

gulp.task('watch', function () {
  gulp.watch(paths.less, ['less']);
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

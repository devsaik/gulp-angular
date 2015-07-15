/**
 * Created by rca733 on 7/13/15.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var _ = require('lodash');

gulp.task('offers', function () {
  return gulp.src([
    path.join(conf.paths.src, '/app/components/offers/assets/**/*.*')
      ])
      .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/assets/')))

});

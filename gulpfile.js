
'use strict';

// Modules
var gulp = require('gulp');

var dest = 'themes/cdsbf75/public/lib';

gulp.task('copy_libs_npm', function () {
  var source = [
    'node_modules/bootstrap/**/*',
    'node_modules/bootstrap-rtl/**/*',
    'node_modules/fitvids/**/*',
    'node_modules/highlightjs/**/*',
    'node_modules/jquery/**/*',
    'node_modules/masonry-layout/**/*',
    'node_modules/sweetalert/**/*',
    'node_modules/jquery.backstretch/**/*',
    'node_modules/fancybox/**/*'
  ];

  return gulp.src(source, { base: 'node_modules' })
             .pipe(gulp.dest(dest));

});

gulp.task('copy_libs_bower', function () {
  var source = [
    'bower_components/bootstrap-autohidingnavbar/**/*'
  ];

  return gulp.src(source, { base: 'bower_components' })
             .pipe(gulp.dest(dest));

});


gulp.task('copy_libs', ['copy_libs_npm', 'copy_libs_bower']);

// Default
gulp.task('default', ['copy_libs']);

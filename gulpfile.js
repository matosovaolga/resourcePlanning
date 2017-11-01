'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    watch = require('gulp-watch'),
    exec = require('child_process').exec;

var devurl = './assets/';

gulp.task('watch', function () {
    gulp.watch(devurl + '/**/**/*.ts', ['ts']);
    });

gulp.task('build', function (cb) {
  exec('ng build --watch',{maxBuffer: 1024 * 500}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('develop', function () {
  nodemon({ script: 'server.js'
          , ext: 'html js'
          , ignore: ['ignored.js']
          })
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('default', ['watch', 'develop']);
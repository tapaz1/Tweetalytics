var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('default', function() {
  console.log('Running gulp tasks..');
});

gulp.task('copy', function () {
  console.log("Running gulp task 'copy'.");
  gulp.src('src/app/server/**/*.js')
    .pipe(gulp.dest('./'));

  gulp.src('data/**')
    .pipe(gulp.dest('dist'));
});

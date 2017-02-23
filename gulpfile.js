var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('default', function() {
  console.log('Running gulp tasks..');
  exec('node server.js', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
});

gulp.task('copy', function () {
  console.log("Running gulp task 'copy'.");
  gulp.src('src/app/server/**/*.js')
    .pipe(gulp.dest('./'));

  gulp.src('data/**')
    .pipe(gulp.dest('dist'));
});

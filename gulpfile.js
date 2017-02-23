var gulp = require('gulp');

gulp.task('default', function() {
  console.log('Running gulp tasks..');
  console.log(port);
});

gulp.task('copy', function () {
  console.log("Running gulp task 'copy'.");
  gulp.src('src/app/server/**/*.js')
    .pipe(gulp.dest('./'));

  gulp.src('data/**')
    .pipe(gulp.dest('dist'));
});

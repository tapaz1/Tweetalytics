var gulp = require('gulp');

gulp.task('default', function() {
  console.log('Running gulp tasks..');

});

gulp.task('copy', function () {
  console.log("Running gulp task 'copyServer'.");
  gulp.src('src/app/server/**/*.js')
    .pipe(gulp.dest('dist'));

  gulp.src('data/**')
    .pipe(gulp.dest('dist'));
});

var gulp = require('gulp');

gulp.task('default', function() {
  console.log('Running gulp tasks..');
  console.log(process.env.PORT);
  console.log(process.env.HTTP_HOST);
  console.log(process);
});

gulp.task('copy', function () {
  console.log("Running gulp task 'copyServer'.");
  gulp.src('src/app/server/**/*.js')
    .pipe(gulp.dest('./'));

  gulp.src('data/**')
    .pipe(gulp.dest('dist'));
});

var gulp = require('gulp');

gulp.task('default', function() {
	console.log('Hello World');
});

gulp.task('alt', (callback) => {
  console.log(callback);
  console.log(callback());
  console.log('Hello Alt-World');
});

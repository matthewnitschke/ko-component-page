var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var strip = require('gulp-strip-comments');

gulp.task('scripts', function() {
    gulp.src(['src/ko-component-page.js', 'src/lib/prism.js'])
      .pipe(concat('ko-component-page.js'))
      .pipe(gulp.dest('dist'));

    gulp.src(['src/ko-component-page.css', 'src/lib/prism.css'])
      .pipe(concat('ko-component-page.css'))
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);

var gulp = require('gulp');

var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  js: ['smooth-scroll.js', 'scroll-spy.js', 'modal.js', 'tooltip.js'],
  css: ['gallery.theme.css', 'gallery.min.css', 'main.css']
};

gulp.task('js', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('css', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.css)
    .pipe(cssmin())
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('.'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.css, ['css']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'js', 'css']);



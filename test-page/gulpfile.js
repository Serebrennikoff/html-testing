const gulp = require("gulp"),
  		plumber = require('gulp-plumber'),
  		autoprefixer = require('gulp-autoprefixer'),
  		browserSync = require('browser-sync'),
  		sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src('./scss/compile/*.scss')
      .pipe(plumber())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./css'))
});

gulp.task('server', function () {
  browserSync({
    port: 8080,
    server: {
      baseDir: './'
     }
  });
});

gulp.task('watch', function() {
    gulp.watch([
      'index.html',
      'main.css',
      'scss/**/*.scss'
    ]).on('change', browserSync.reload);
    gulp.watch('scss/**/*.scss', ['sass']);
  });

  gulp.task('default', ['server', 'watch']);
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

const cssFiles = [
          'css/airspace.css'
        , 'css/bootstrap.min.css'
        , 'css/font-awesome.min.css'
        , 'css/airspace.css'
        , 'css/style.css'
        , 'css/ionicons.min.css'
        , 'css/animate.css'
        , 'css/responsive.css'
        , 'css/syntax.css'];

const jsFiles = [
          'js/vendor/jquery-1.10.2.min.js'
        , 'js/vendor/modernizr-2.6.2.min.js'
        , 'js/bootstrap.min.js'
        , 'js/jquery.counterup.js'
        , 'js/plugins.js'
        , 'js/main.js'];

gulp.task('css', () => {
  gulp.src(cssFiles)
    .pipe(concat('all.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets'))
});

gulp.task('js', () => {
  gulp.src(jsFiles)
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets'))
});

gulp.task('default', ['css', 'js']);

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

//sass compiler
function sass_cmpler() {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

//minify css file
var uglifycss = require('gulp-uglifycss');

function css() {
  return gulp.src('./css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
}


function watch() {
  gulp.watch('./sass/*.scss',sass_cmpler);
  gulp.watch('./css/*.css', css );
}


exports.sass_cmpler = sass_cmpler;
exports.css = css;
exports.watch = watch;





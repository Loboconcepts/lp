var gulp = require('gulp');
var sass = require('gulp-sass');
var mustache = require('gulp-mustache');
var gulpSequence = require('gulp-sequence');
var purgecss = require('gulp-purgecss');

gulp.task('mustache-html', function() {
	gulp.src("./index.html")
    .pipe(mustache({style: "{{> ../../build/css/partials/style.css}}"},{},{}))
    .pipe(gulp.dest("./build/html"));
});

sass.compiler = require('node-sass');
 
gulp.task('sass', function() {
  return gulp.src('./sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('purgecss', function() {
  return gulp.src('./build/css/style.css')
    .pipe(
      purgecss({
        content: ['./build/html/index.html'],
        whitelist: ['body','a','p','h1','h2','h3','h4','h5','h6']
      })
    )
    .pipe(gulp.dest('./build/css/partials'))
})

gulp.task('mustache-final', function() {
	gulp.src("./build/html/index.html")
    .pipe(mustache({},{},{}))
    .pipe(gulp.dest("./dist"));
});

gulp.task('default', gulpSequence('mustache-html','sass', 'purgecss','mustache-final'));

// gulp.task('default', ['mustache-html','sass', 'purgecss','mustache-final'], function(){
//    console.log("Yay!")
// });
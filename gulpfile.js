var gulp = require('gulp');
var sass = require('gulp-sass');
var mustache = require('gulp-mustache');
var gulpSequence = require('gulp-sequence');
var purgecss = require('gulp-purgecss');
var minify = require('gulp-minify');


gulp.task('mustache-html', function() {
	gulp.src("./index.html")
    
    .pipe(mustache('main.json',{},{}))
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
    // .pipe(
    //   purgecss({
    //     content: ['./build/html/index.html'],
    //     whitelist: ['body','a','p','h1','h2','h3','h4','h5','h6']
    //   })
    // )
    .pipe(gulp.dest('./build/css/partials'))
})

gulp.task('compress', function() {
  gulp.src(['./main.js'])
    .pipe(minify({
        noSource:true,
        ext : {
            src: '.js',
            min: '.js'
        }
    }))
    .pipe(gulp.dest('./build/js/partials'))
});

gulp.task('mustache-final', function() {
	gulp.src("./build/html/index.html")
    .pipe(mustache({},{},{}))
    .pipe(gulp.dest("./dist"));
});

gulp.task('default', gulpSequence('mustache-html','compress','sass','purgecss','mustache-final'));

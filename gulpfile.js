var gulp = require('gulp');
var sass = require('gulp-sass');
var mustache = require('gulp-mustache');
var gulpSequence = require('gulp-sequence');
var purgecss = require('gulp-purgecss');
var minify = require('gulp-minify');
var gzip = require('gulp-gzip');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
 
gulp.task('gzip', function() {
    gulp.src('./dist/index.html')
    .pipe(gzip())
    .pipe(gulp.dest('./dist/gzip/'));
});


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
    //     whitelist: ['body','a','p','h1','h2','h3','h4','h5','h6','hr']
    //   })
    // )
    .pipe(gulp.dest('./build/css/partials'))
})

gulp.task('compress', function() {
  gulp.src(['./build/js/main.js'])
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

gulp.task('default', function () {
    watch('build/html/partials/*.html', batch(function (events, done) {
        gulp.start('build', done);
    }));
});

gulp.task('build', function(callback) {
    gulpSequence(
    'mustache-html',
    'compress',
    'sass',
    'purgecss',
    'mustache-final'
    )(callback)});


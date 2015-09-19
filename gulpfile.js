/**
 * Created by ASUA on 2015/9/18.
 */

var gulp = require("gulp"),
    connect = require("gulp-connect"),
    browserify = require('gulp-browserify'),
    concat = require("gulp-concat"),
    port = 3000;

gulp.task('browser', function() {
    gulp.src("./app/js/main.js")
        .pipe(browserify({
            transform: 'reactify'
        }))
        .pipe(gulp.dest("./dist/js"));
});

gulp.task('connect', function () {
    connect.server({
        port: port,
        livereload: true
    });
});

gulp.task('js', function(){
    gulp.src("./dist/js/*.js")
        .pipe(connect.reload());
});

gulp.task('html', function(){
    gulp.src("./app/**/*.html")
        .pipe(connect.reload());
    gulp.src("./index.html")
        .pipe(connect.reload());
});

gulp.task("watch", function(){
    gulp.watch("./dist/**/*.js", ["js"]);
    gulp.watch("./app/**/*.html", ["html"]);
    gulp.watch("./app/**/*.js", ["browser"]);
});

gulp.task("default", ['browser']);

gulp.task("serve", ['browser', "connect", "watch"]);
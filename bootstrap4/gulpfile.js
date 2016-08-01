var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('thor', function(){
    //gulp.src('./source/bower_components/bootstrap/scss/bootstrap.scss')
    gulp.src('./source/sass/menu.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css/'));

    gulp.src('./source/bower_components/jquery/dist/jquery.js')
        .pipe(gulp.dest('./public/js/'));

    gulp.src('./source/bower_components/bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest('./public/js/'));

});

gulp.task('demolidor', function(){
    gulp.watch('./source/sass/**/*.scss', ['thor']);
});
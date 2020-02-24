var gulp = require('gulp');
const del = require('del');
var concatCss = require('gulp-concat-css');
const browserSync = require('browser-sync').create();

gulp.task('default', function () {
    return gulp.src('./css/*.css')
        .pipe(concatCss("styles/style.css"))
        .pipe(gulp.dest('out/'));
});
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./*.html').on('change', browserSync.reload);
}
function clean(){
    return del(['build/*'])
}


gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel('default')));
gulp.task('dev', gulp.series('build', 'watch'));

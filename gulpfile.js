const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));  

function buildStyles() {
    return gulp.src('./lib/bootstrap-5.1.3/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./lib/bootstrap-5.1.3/dist/css'));
}

function buildStyles2() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
} 
exports.buildStyles  = buildStyles
exports.compila = buildStyles2 
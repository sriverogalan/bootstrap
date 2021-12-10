const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));  

function buildStyles2() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
} 
exports.compila = buildStyles2 
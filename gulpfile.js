var gulp = require('gulp');

var sass = require("gulp-sass");

// Compile Sass
gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);
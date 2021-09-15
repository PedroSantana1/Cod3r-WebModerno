const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transpileJS(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.error(err))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/js'))

    return cb()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transpileJS, fim)
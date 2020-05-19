const {src, dest, watch, series, parallel} = require('gulp'),
    csslint = require('gulp-csslint'),
    concatcss = require('gulp-concat-css'),
    uglifycss = require('gulp-uglifycss'),
    stylish = require('jshint-stylish'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    gulpif = require('gulp-if'),
    del = require('del'),
    config = require('./config.json');

// 파일 삭제
function clean() {
    return del([config.path.js.dest + '*']);
}

// NPM 설치 모듈 : gulp-csslint, gulp-concat-css, gulp-uglifycss
// CSS 문법 검사 > 병합 > 압축
function styles() {
    return src(config.path.css.src)
        .pipe(gulpif(config.lint, csslint({
            'import': false
        })))
        .pipe(gulpif(config.lint, csslint.formatter()))
        .pipe(gulpif(config.concat, concatcss(config.path.css.filename)))
        .pipe(gulpif(config.rename, dest(config.path.css.dest)))
        .pipe(gulpif(config.uglify, uglifycss()))
        .pipe(gulpif(config.rename, rename({
            suffix: '.min'
        })))
        .pipe(dest(config.path.css.dest))
}

// JS 문법 검사
function jsHint() {
    return src(config.path.js.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
}

// JS 병합
function jsConcat() {
    return src(config.path.js.src)
        .pipe(concat(config.path.js.filename))
        .pipe(dest(config.path.js.dest));
}

// JS 압축
function jsUglify() {
    return src(config.path.js.dest + config.path.js.filename)
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(config.path.js.dest));
}

// 지속적 관찰(Watch) 업무 정의
function fileWatch() {
    watch(config.path.css.src, series(clean, styles));
    watch(config.path.js.src, series(clean, series(jsHint, jsConcat, jsUglify)));
}

// Gulp.task()를 사용해 기본(Default) 테스크 정의
exports.default = series(clean, parallel(styles, series(jsHint, jsConcat, jsUglify, fileWatch)));
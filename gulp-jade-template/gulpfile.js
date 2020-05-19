"use strict";

// 모듈 호출
// gulp-if 조건 처리
// gulp-rename 파일 이름 변경
// gulp-connect 웹 서버
// gulp-watch 변경된 파일만 처리
// gulp-plumber 오류 발생해도 watch 업무 지속
// gulp-open 브라우저 오픈
// gulp-jade jade 컴파일
// gulp-html-prettify HTML 구조 읽기 쉽게 변경
// del 폴더(디렉터리)/파일 제거

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
    jade = require('gulp-jade'),
    del = require('del'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    config = require('./config.json'),
    gulpWatch = require('gulp-watch');

// 파일 삭제
function clean() {
    return del(
        [config.path.del.dest],
        {
            dryRun: true
        }
    );
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
        .pipe(connect.reload())
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
        .pipe(dest(config.path.js.dest))
        .pipe(connect.reload())
}

// Jade 컴파일
function jadeCompile() {
    return src(config.path.html.src + 'jade/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(dest(config.path.html.dest))
        .pipe(connect.reload())
}

// html
function html() {
    return src(config.path.html.src + '*.html')
        .pipe(dest(config.path.html.dest))
        .pipe(connect.reload())
}

// 웹 서버 업무 (LiveReload 사용)
function server() {
    return connect.server({
        root: config.path.html.dest,
        port: config.port,
        livereload: config.livereload
    })
}

// 브라우저 오픈 업무
function browserOpen() {
    const options = {
        uri: 'http://localhost:' + config.port,
        app: config.browser //chrome, firefox, iexplore, opera, safari
    };
    return src(config.path.html.dest)
        .pipe(open(options)); // local 서버가 아닌 파일 경로로 열려면 '<%file.path%>' 를 넣어주면된다.
}

// 지속적 관찰(Watch) 업무 정의
function fileWatch() {
    gulpWatch(config.path.html.src+'*.html', series(clean, html));
    gulpWatch(config.path.html.src+'jade/**/*.jade', series(clean, jadeCompile));
    gulpWatch(config.path.css.src, series(clean, styles));
    gulpWatch(config.path.js.src, series(clean, series(jsHint, jsConcat, jsUglify)));
}

// Gulp 기본(Default) 테스크 정의
exports.default = series(clean, parallel(styles, html, series(jsHint, jsConcat, jsUglify, jadeCompile, parallel(server, browserOpen, fileWatch))));
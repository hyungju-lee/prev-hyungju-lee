"use strict";

// 모듈 호출
// gulp             : gulp 모듈
// gulp-eslint      : javascript 문구 문법 검사
// gulp-concat      : javascript 파일을 한 파일로 합쳐주는 모듈
// gulp-uglify      : javascript 파일을 min 파일처럼 압축해주는 모듈
// gulp-babel       : es6를 es5로 컴파일 해주는 모듈
// gulp-rename      : 파일의 이름을 바꿔주는 모듈
// gulp-jade        : HTML 템플릿 중 하나인 jade 템플릿을 사용할 수 있게 하는 모듈
// gulp-ejs         : HTML 템플릿 중 하나인 ejs 템플릿을 사용할 수 있게 하는 모듈
// gulp-sass        : sass를 사용할 수 있게 해주는 모듈
// gulp-clean-css   : css 파일을 이쁘게 압축해주는 모듈
// del              : 폴더(디렉터리)/파일 제거
// gulp-connect     : local 서버와 연결하게 해주는 모듈
// gulp-open        : 브라우저를 열게하는 모듈
// gulp-sass-lint   : sass 문법검사 모듈
// autoprefixer     : vend prefix를 자동으로 달아주는 모듈
// gulp-postcss     : 위 autoprefixer와 같이 쓰는 모듈
// gulp-imagemin    : image 파일 용량을 줄여주는 모듈
// gulp.spritesmith : sprite 이미지와 CSS 자동 생성 모듈
// vinyl-buffer     : gulp.spritesmith 모듈과 gulp-imagemin 모듈을 연결시켜주는 모듈
// merge-stream     : stream을 merge시켜주는 모듈, 종료신호를 묶어서 보낼 수 있다.

import {watch, series, parallel} from 'gulp';
import {Clean} from './clean';
import {SpriteAndImgCompress} from './spriteAndCompress';
import {Sass} from './sass';
import {LintEs} from './lintjs';
import {ConcatJs} from './concatjs';
import {UglifyJs} from './uglifyjs';
import {Libs} from './libjs';
import {JadeCompile} from './jade';
import {EjsCompile} from './ejs';
import {Server} from './server';
import {BrowserOpen} from './browserOpen';
import config from '../config.json';
import {fsReadDir} from './fsReadDir';

// 파일 목록 읽기 - 테스트
export const TestReadDir = () => {
    return fsReadDir();
};

// 파일 삭제
export const FileDelete = () => {
    return Clean();
};

// 이미지 용량 줄이기 및 sprite
const SpriteCompress = () => {
    return SpriteAndImgCompress();
};


// Sass 컴파일
// 주의할 점, Jade 템플릿과 어떻게 연동했냐에 따라서 watch 함수 내부를 수정해줄 필요가 있다.
// Jade 템플릿에 style 태그에 인라인 형식으로 불러왔으면 watch 형식에서 Jade 탬플릿까지 수정을해줘야하는 함수를 호출해야한다.
const SassCompile = () => {
    return Sass();
};

// JS 문법 검사
const InspectionJs = () => {
    return LintEs();
};

// JS 병합
const CompressJs = () => {
    return ConcatJs();
};

// JS 압축
const PressJs = () => {
    return UglifyJs();
};

// JS libs 내보내기
const Libsjs = () => {
    return Libs();
};

// Jade 컴파일
const Jade = () => {
    return JadeCompile();
};

// ejs 컴파일
const Ejs = () => {
    return EjsCompile();
};

// 웹 서버 업무 (LiveReload 사용)
const ServerMake = () => {
    return Server();
};

// 브라우저 오픈 업무
const PageOpen = () => {
    return BrowserOpen();
};

// 지속적 관찰(Watch) 업무 정의
// Jade Template 내부 인라인 형식으로 들어가게 했을지도 모르므로 다음과 같이 모든 함수 뒤에 JadeCompile 함수를 호출하였다.
const FileWatch = () => {
    watch([config.path.img.src, config.path.spImg.src], SpriteCompress);
    watch([config.path.jade.src, config.path.jade.parts], Jade);
    watch([config.path.ejs.src, config.path.ejs.parts], Ejs);
    watch(config.path.sass.src, series(SassCompile, Jade, Ejs));
    watch(config.path.js.src, series(InspectionJs, CompressJs, PressJs, Jade, Ejs));
    watch(config.path.js.libs, Libsjs, Jade, Ejs);
};

/*
 * You could even use `export as` to rename exported tasks
 */
exports.build = series(FileDelete, series(Libsjs, SpriteCompress), parallel(SassCompile, series(InspectionJs, CompressJs, PressJs)), Jade, Ejs);

/*
 * You could even use `export as` to rename exported tasks
 */
exports.watch = parallel(ServerMake, PageOpen, FileWatch);

/*
 * Export a default task
 */
exports.default = series(FileDelete, series(Libsjs, SpriteCompress), parallel(SassCompile, series(InspectionJs, CompressJs, PressJs)), Jade, Ejs, parallel(ServerMake, PageOpen, FileWatch));
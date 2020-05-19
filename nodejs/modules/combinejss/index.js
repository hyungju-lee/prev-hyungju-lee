/* ! combineJS module @ hyungju-lee, 2020 */
// File System 내장 모듈 호출
var fs = require('fs'),
    minify = require('minify');

/*
 * combineJS 모듈 정의 및 외부로 출력
 * 모듈 내부에 전달받을 인자(배열, 문자열) 설정
 * 압축 유무를 설정하는 min 옵션 추가 (기본 값 : false)
 */
module.exports = function (jsSrc, exportJs, min) {
    var mergeCode = '',
        len = jsSrc.length - 1; // 조건 확인을 위한 len 변수
    // min 초기 값 설정
    min = min || false;
    // 배열 jsSrc를 개별적으로 접근 조작하기 위해
    // forEach 배열 메소드 사용
    jsSrc.forEach(function (file, index) {
        if (min) {
            minify(file).then(function (data) {
                mergeCode += data;
                if (index == len) {
                    writeFile();
                }
            });
        } else {
            mergeCode += fs.readFileSync(file);
            if (index == len) {
                writeFile();
            }
        }
    });

    // 병합된 코드 mergeCode를 내용을 파일 생성
    function writeFile() {
        fs.writeFileSync(exportJs, mergeCode);
    }
};
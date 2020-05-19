var fs = require('fs');
console.log('문서쓰기 프로세스 시작...');

var cssDoc = '#nodejs{margin:0;}';
fs.writeFile(
    'files/style.css',
    cssDoc,
    function () {
        console.log('files/style.css 파일 생성');
    }
);

console.log('문서 쓰기 프로세스 끝');
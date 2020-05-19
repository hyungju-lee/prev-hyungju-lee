var fs = require('fs');
console.log('문서 쓰기 프로세스 시작...');

var cssDoc = '#nodejs {margin:0; padding:0; border:0;}';
var options = {encoding: 'utf8'};
fs.writeFileSync(
    'files/style.css',
    cssDoc,
    options
);
console.log('코드의 흐름이 동기(Sync)적으로 처리!');

console.log('문서 쓰기 프로세스 끝');
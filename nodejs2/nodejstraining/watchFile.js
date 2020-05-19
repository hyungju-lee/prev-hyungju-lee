var fs = require('fs');

// style.css 문서 경로
var styleDoc = 'files/style.css';

// watchFile() - 파일 변화를 지속적으로 관찰

fs.watchFile(styleDoc, function (cur, prv) {
    // readFileSync() - 파일을 동기적으로 읽어옴
    var doc = fs.readFileSync(styleDoc);
    // 변경된 파일 내용을 콘솔에 출력
    console.log('변경된 문서 내용:\n' + doc);
});
var fs = require('fs');
console.log('파일 읽기 프로세스 시작....');
// File System-readFile() 사용
fs.readFile('files/user.json', function (err, data) {
    console.log('data: ' + data);
});
console.log('파일 읽기 프로세스 끝');
var fs = require('fs');
console.log('파일 읽기 프로세스 시작....');
// File System-readFile() 사용
var data = fs.readFileSync('files/user.json');
var json2obj = JSON.parse(data);
console.log('data: ' + json2obj.name);
console.log('파일 읽기 프로세스 끝');
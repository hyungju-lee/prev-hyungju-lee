/* ! combineJS module @ hyungju-lee, 2020 */
// File System 내장 모듈 호출
var fs = require('fs'),
    minify = require('minify');

// combineJS 모듈 정의
module.exports = function (jsSrc, exportJs, min) {
    var mergeCode = '',
        len = jsSrc.length - 1;
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

    function writeFile() {
        fs.writeFileSync(exportJs, mergeCode);
    }
};
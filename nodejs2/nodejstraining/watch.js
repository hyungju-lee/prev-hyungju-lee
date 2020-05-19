var fs = require('fs');

// 폴더 경로
var folderPath = 'files';

fs.watch(folderPath, function (event, filename) {
    console.log('event is : ' + event);
    if (filename) {
        console.log('filename provided : ' + filename);
    } else {
        console.log('filename not provided');
    }
});
const fs = require('fs');

function passingCallback(cb) {
    fs.access('gulpfile.js', cb);
}

exports.default = passingCallback;
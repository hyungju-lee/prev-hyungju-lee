// node_modules/combinejss 모듈 호출
var combinejss = require('combinejss');

// combinejss 모듈 테스트
combinejss(['./watch.js', './writeFileSync.js'], './all.js', true);
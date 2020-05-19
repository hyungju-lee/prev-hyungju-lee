const fs = require('fs');
const testFolder = './assets_99_resource_down_2020-02-04';
const cont = fs.readdirSync(testFolder);
const strCont = JSON.stringify(cont);
const cont2 = strCont.replace(/,/gi, "\n").replace(/"/gi, "").replace(/\[/gi, "").replace(/]/gi, "");
const cont3 = cont2.replace(/ \(기존\)/gi, "").replace(/ \(기초\)/gi, "");
const cont4 = cont3.replace(/.*\(대체\).png\n/gi, "");

fs.writeFileSync('list.txt', cont4);
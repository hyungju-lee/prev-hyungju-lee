import fs from "fs";

export const fsReadDir = () => {
    let fileList;
    let fileList2 = [];
    fileList = fs.readdirSync('./src/ejs/', {
        encoding: 'utf8',
        withFileTypes: true
    });
    fileList.forEach(function (file, index) {
        if (!file.isDirectory()) {
            fileList2.push(file.name)
        }
    });
    console.log(fileList);
    console.log(fileList[0].isDirectory());
    console.log(fileList[3].isDirectory());
    console.log(fileList2);
};
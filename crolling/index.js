const fs = require('fs'),
        axios = require("axios"),
        cheerio = require("cheerio");

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
async function getHTML() {
    try {
        return await axios.get("https://chaewonkong.github.io");
    } catch (error) {
        console.error(error);
    }
}

// getHTML 함수 실행 후 데이터에서
// 에 속하는 제목을 titleList에 저장
getHTML()
    .then(html => {
        let titleList = [];
        const $ = cheerio.load(html.data);
        // ul.list--posts를 찾고 그 children 노드를 bodyList에 저장
        const bodyList = $("h1.post-title").children("a");

        // bodyList를 순회하며 titleList에 h2 > a의 내용을 저장
        bodyList.each(function (i, elem) {
            titleList[i] = {
                title: $(this)
                    .text()
            };
        });
        console.log(titleList);
        return titleList;
    })
    .then(res => {
        fs.writeFileSync('./list.txt', JSON.stringify(res))
    });
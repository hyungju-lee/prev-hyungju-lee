import config from "../../config";
import {src} from "gulp";
import open from "gulp-open";

export const BrowserOpen = () => {
    const options = {
        uri: `http://localhost:${config.port}`,
        app: config.browser //chrome, firefox, iexplore, opera, safari
    };
    return src(config.path.browser.dest)
        .pipe(open(options)); // local 서버가 아닌 파일 경로로 열려면 '<%file.path%>' 를 넣어주면된다.
};
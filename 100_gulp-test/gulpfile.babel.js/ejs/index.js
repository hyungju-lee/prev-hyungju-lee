import {dest, lastRun, src} from "gulp";
import config from "../../config";
import ejs from "gulp-ejs";
import rename from "gulp-rename";
import connect from "gulp-connect";

export const EjsCompile = () => {
    return src(config.path.ejs.src, {since: lastRun(EjsCompile)})
        .pipe(ejs({
            msg: "Hello Gulp!"
        }))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(dest(config.path.ejs.dest))
        .pipe(connect.reload())
};
import {dest, src} from "gulp";
import config from "../../config";
import jsConcat from "gulp-concat";
import babel from "gulp-babel";

export const ConcatJs = () => {
    return src(config.path.js.src)
        .pipe(jsConcat(config.path.js.filename))
        .pipe(babel())
        .pipe(dest(config.path.js.dest));
};
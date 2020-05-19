import {src} from "gulp";
import config from "../../config";
import esLint from "gulp-eslint";

export const LintEs = () => {
    return src(config.path.js.src)
        .pipe(esLint())
        .pipe(esLint.format())
};
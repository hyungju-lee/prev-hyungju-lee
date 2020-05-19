import {dest, src} from "gulp";
import config from "../../config";
import connect from "gulp-connect";

export const Libs = () => {
    return src(config.path.js.libs)
        .pipe(dest(config.path.js.libsDest))
        .pipe(connect.reload())
};
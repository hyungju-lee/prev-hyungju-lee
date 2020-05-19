import {dest, src} from "gulp";
import config from "../../config";
import jsUglify from "gulp-uglify";
import rename from "gulp-rename";
import connect from "gulp-connect";

export const UglifyJs = () => {
    return src(config.path.js.dest + config.path.js.filename, {sourcemaps: true})
        .pipe(jsUglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(config.path.js.dest, {sourcemaps: true}))
        .pipe(connect.reload())
};
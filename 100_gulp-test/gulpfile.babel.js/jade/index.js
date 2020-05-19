import {dest, src, lastRun} from "gulp";
import config from "../../config";
import jade from "gulp-jade";
import connect from "gulp-connect";

export const JadeCompile = () => {
    return src(config.path.jade.src, {since: lastRun(JadeCompile)})
        .pipe(jade({
            pretty: true
        }))
        .pipe(dest(config.path.jade.dest))
        .pipe(connect.reload())
};
import {dest, src} from "gulp";
import config from "../../config";
import sassLint from "gulp-sass-lint";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cleanCss from "gulp-clean-css";
import connect from "gulp-connect";

export const Sass = () => {
    return src(config.path.sass.src, {sourcemaps: true})
        .pipe(sassLint({
            options: {
                formatter: 'stylish'
            }
        }))
        .pipe(sassLint.format())
        .pipe(sass({
            sourceComments: false, // source 위치 주석
            outputStyle: 'compact' // nested, expanded, compact, compressed
        }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCss({format: 'keep-breaks'}))
        .pipe(dest(config.path.sass.dest, {sourcemaps: true}))
        .pipe(connect.reload())
};
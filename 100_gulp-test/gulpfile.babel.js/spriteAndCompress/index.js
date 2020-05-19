import {dest, src} from "gulp";
import config from "../../config";
import imagemin from "gulp-imagemin";
import spritesmith from "gulp.spritesmith";
import buffer from "vinyl-buffer";
import merge from "merge-stream";

export const SpriteAndImgCompress = () => {
    const imgCompress = src(config.path.img.src)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 80, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest(config.path.img.dest));
    const spriteData = src(config.path.spImg.src)
        .pipe(spritesmith({
            retinaSrcFilter: config.path.retinaImg.src,
            imgName: config.path.spImg.filename,
            retinaImgName: config.path.retinaImg.filename,
            imgPath: config.path.spImg.imgPath,
            retinaImgPath: config.path.retinaImg.retinaImgPath,
            cssName: '_sprite.scss',
            padding: 2
        }));
    const imgStream = spriteData.img
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(dest(config.path.spImg.dest));
    const cssStream = spriteData.css
        .pipe(dest('src/sass/modules/'));
    return merge(imgCompress, imgStream, cssStream);
};
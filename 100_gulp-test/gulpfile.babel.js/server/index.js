import connect from "gulp-connect";
import config from "../../config";

export const Server = () => {
    return connect.server({
        root: config.path.browser.dest,
        port: config.port,
        livereload: config.livereload
    })
};
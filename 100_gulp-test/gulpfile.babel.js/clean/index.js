import del from "del";
import config from "../../config";

export const Clean = () => {
    return del(
        [config.path.del.dest]
    );
};
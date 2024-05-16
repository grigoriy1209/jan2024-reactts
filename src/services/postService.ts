import {apiService} from "./apiService";
import {urls} from "../constants";

import {IPostModel} from "../model";
import {IRes} from "../types/responseType";

const postService = {
    getAllPosts: ():IRes<IPostModel[]> => apiService.get(urls.posts.base)
}
export {
    postService
}
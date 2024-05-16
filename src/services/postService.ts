import {apiService} from "./apiService";
import {urls} from "../constants";

const postService = {
    getAllPosts: () => apiService.get(urls.posts.base)
}
export {
    postService
}
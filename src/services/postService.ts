import {IRes} from "../types/response";
import {IPostsModule} from "../modules";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const postService = {
    getAllPosts:():IRes<IPostsModule[]>=> apiService.get(urls.posts.base)
}
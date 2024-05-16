import {apiService} from "./apiService";
import {urls} from "../constants";
import {AxiosResponse} from "axios";
import {IPostModel} from "../model";

const postService = {
    getAllPosts: ():Promise<AxiosResponse<IPostModel[]>> => apiService.get(urls.posts.base)
}
export {
    postService
}
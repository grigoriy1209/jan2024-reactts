import {IRes} from "../types/responseType";
import {IPostModel} from "../models";
import {apiService} from "./apiService";
import {urls} from "../constants";

const postService = {
    getPostOfUser:(userId:string):IRes<IPostModel[]> =>apiService.get(urls.posts.getPosts(userId)),
    byId:(id:number):IRes<IPostModel>=>apiService.get(urls.posts.byId(id)),
}
export {
    postService
}
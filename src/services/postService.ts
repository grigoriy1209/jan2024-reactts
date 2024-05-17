import {IRes} from "../types/responseType";
import {IPostModel} from "../models";
import {apiService} from "./apiService";
import {urls} from "../constants";
const postService = {
    getByUserId:(userId:string):IRes<IPostModel[]> =>apiService.get(urls.posts.base,{params:(userId)}),
    byId:(id:string):IRes<IPostModel>=>apiService.get(urls.posts.byId(+id)),
}
export {
    postService
}
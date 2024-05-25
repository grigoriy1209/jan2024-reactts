import {IRes} from "../types/responseType";
import {ICommentModel} from "../models";
import {apiService} from "./apiService";
import {urls} from "../constants";

const commentService = {
    getCommentsOfPost:(postId:string):IRes<ICommentModel[]>=>apiService.get(urls.comments.getComments(postId)),

}
export {
    commentService
}
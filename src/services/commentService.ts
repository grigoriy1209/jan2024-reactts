import {IRes} from "../types/responseType";
import {ICommentModel} from "../models";
import {apiService} from "./apiService";
import {urls} from "../constants";

const commentService = {
    getAllUser:():IRes<ICommentModel[]>=>apiService.get(urls.comments.base),
    getById:(id:string):IRes<ICommentModel> =>apiService.get(urls.comments.byId('id'))
}
export {
    commentService
}
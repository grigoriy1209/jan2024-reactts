import {apiService} from "./apiService";
import {urls} from "../constants";
import {AxiosResponse} from "axios";
import {ICommentModel} from "../model";

const commentService = {
    getAllComment: ():Promise<AxiosResponse<ICommentModel[]>> => apiService.get(urls.comments.base)
}
export  {commentService}
import {apiService} from "./apiService";
import {urls} from "../constants";

import {ICommentModel} from "../model";
import {IRes} from "../types/responseType";

const commentService = {
    getAllComment: ():IRes<ICommentModel[]> => apiService.get(urls.comments.base)
}
export  {commentService}
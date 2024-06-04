import {IRes} from "../types/response";
import {ICommentsModule} from "../modules";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const commentService= {
    getAllComments:():IRes<ICommentsModule[]>=> apiService.get(urls.comments.base)
}

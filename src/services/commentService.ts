import {apiService} from "./apiService";
import {urls} from "../constants";

const commentService = {
    getAllComment: () => apiService.get(urls.comments.base)
}
export  {commentService}
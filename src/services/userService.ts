import {apiService} from "./apiService";
import {urls} from "../constants";
import {IUserModel} from "../model";
import {IRes} from "../types/responseType";

const userService = {
    getAllUsers: ():IRes<IUserModel[]>=> apiService.get(urls.users.base)
}
export {
    userService
}
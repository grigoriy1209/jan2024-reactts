import {apiService} from "./apiService";
import {urls} from "../constants";
import {AxiosResponse} from "axios";
import {IUserModel} from "../model";

const userService = {
    getAllUsers: ():Promise<AxiosResponse<IUserModel[]>> => apiService.get(urls.users.base)
}
export {
    userService
}
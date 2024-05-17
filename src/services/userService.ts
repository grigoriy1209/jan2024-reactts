import {IRes} from "../types/responseType";
import {IUserModel} from "../models";
import {apiService} from "./apiService";
import {urls} from "../constants";

const userService = {
    getAllUser:():IRes<IUserModel[]>=>apiService.get(urls.users.base),
    getById:(id:string):IRes<IUserModel> =>apiService.get(urls.users.byId(+id))
}
export   {
    userService
}
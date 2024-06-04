import {IRes} from "../types/response";
import {IUsersModule} from "../modules";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const usersService = {
    getAllUsers:():IRes<IUsersModule[]>=> apiService.get(urls.users.base)
}
export {
    usersService
}
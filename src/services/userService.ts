import {apiService} from "./apiService";
import {urls} from "../constants";

const userService = {
    getAllUsers: () => apiService.get(urls.users.base)
}
export {
    userService
}
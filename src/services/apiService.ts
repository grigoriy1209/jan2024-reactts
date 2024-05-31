import axios from "axios";
import {baseURL} from "../constants/urls";
import {retriveLocalStorageData} from "./helpers/helpers";
import {ITokenObtainPair} from "../models/TokenObtainPair";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(request => {

    if(localStorage.getItem("tokenPair") && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenObtainPair = retriveLocalStorageData<ITokenObtainPair>('tokenPair');
        request.headers.set("Authorization", "Bearer " + iTokenObtainPair.access );
    }
    return request;
})
export {
    apiService
}
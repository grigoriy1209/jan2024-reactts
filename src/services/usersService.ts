import axios, { AxiosResponse} from "axios";

import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers:{'Content-Type': 'application/json'}
});

const getAllUsers =async ():Promise<AxiosResponse<IUserModel[]> >=> {
    return axiosInstance.get("/users")
};

const getAllPostsOfSingleUser = (userId:number):Promise<AxiosResponse<IPostModel[]> > => {
    return axiosInstance.get('/posts/?userId=' + userId);
};


export {
        getAllUsers,
        getAllPostsOfSingleUser
        };
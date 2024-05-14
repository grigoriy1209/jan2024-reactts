import axios from 'axios';
import {PostModule} from "../interfaces/IPostModule";

const createPost = (formValues:PostModule) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', formValues, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => {
            return response.data;
        })
};

export default createPost;

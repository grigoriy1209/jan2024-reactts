const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users'
const posts = '/posts'
const comments = '/comments'

const urls = {
    users: {
        base: users,
        byId:(id:number) => `/users/${id}`,
    },
    posts:{
        base: posts,
        byId:(id: number) => `/posts/${id}`,
    },
    comments:{
        base: comments,
        byId:(id: string) => `/comments/${id}`,
    }

}
export  {
    baseURL,
    urls
}
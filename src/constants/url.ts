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
        getPosts:(userId: string) => `${users}/${userId}/posts`
    },
    comments:{
        base: comments,
        byId:(id: number) => `/comments/${id}`,
        getComments:(postId: string) => `${posts}/${postId}/comments`,
    }

}
export  {
    baseURL,
    urls
}
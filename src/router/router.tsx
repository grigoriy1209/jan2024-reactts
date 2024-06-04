import {createBrowserRouter} from "react-router-dom";

import App from "../App";

import {CommentsPage, PostsCommentsPage, PostsPage, UserPostPage, UsersPage} from "../pages";

const router = createBrowserRouter([
    {
        path: '', element: <App/>, children: [
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'posts', element: <PostsPage/>
            },
            {
                path: 'userPost', element: <UserPostPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>
            },
            {
                path: 'postComments', element: <PostsCommentsPage/>
            }
        ]
    }
]);
export {
    router
}
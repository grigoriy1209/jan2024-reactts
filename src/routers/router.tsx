import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {CommentsPage, PostsPage, UsersPage} from "../pages";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>,children:[
            {
                index:true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>, children:[
                    {
                        path:':id/posts', element:<PostsPage/>, children:[
                            {
                                path:':postId/comments', element:<CommentsPage/>
                            }
                        ]
                    }
                ]
            },
        ]
    }
]);
export {
    router
}
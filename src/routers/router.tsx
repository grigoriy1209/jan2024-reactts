import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {CommentsPage, PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from "../pages";



const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>,children:[
            {
                index:true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>
            },
            {
                path:'users/:id', element:<UserDetailsPage/>, children:[
                    {
                        path:'posts', element:<PostsPage/>
                    }
                ]
            },
            {
                path:'posts/:id',element:<PostDetailsPage/>,children:[
                    {
                        path:'comments',element: <CommentsPage/>
                    }
                ]
            }
        ]
    }
]);
export {
    router
}
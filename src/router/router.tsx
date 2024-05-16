import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {CommentPage, PostPage, UserPage} from "../pages";


export const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UserPage/>
            },
            {
                path:'posts',element:<PostPage/>
            },
            {
                path:'comments', element:<CommentPage/>
            }
        ]
    }
]);
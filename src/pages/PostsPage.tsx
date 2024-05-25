import {Outlet, useParams} from "react-router";
import {useEffect, useState} from "react";
import {IPostModel} from "../models";
import {postService} from "../services";
import {Posts} from "../components/PostsContainer";



const PostsPage = () => {
    const {id} = useParams();
    console.log(id);
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        if(id){
            postService.getPostOfUser(id)
             .then(({data})=>setPosts(data))
        }

    }, [id]);
    return (
        <div>

                <Posts  posts={posts}/>
                         <hr/>
                         <Outlet />

        </div>
    );
};

export {PostsPage};
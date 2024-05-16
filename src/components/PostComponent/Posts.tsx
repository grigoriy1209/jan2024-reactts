import React, {FC, useEffect, useState} from "react";
import {IPostModel} from "../../model";
import {postService} from "../../services";
import {Post} from "./Post";


const Posts:FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        postService.getAllPosts().then(({data})=>setPosts(data))
    }, []);
    return (
        <div>
            {
                posts.map(post=>< Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};
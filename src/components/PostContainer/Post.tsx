import {FC} from "react";
import {IPostsModule} from "../../modules";

interface IProps{
    post:IPostsModule
}

const Post :FC<IProps>= ({post}) => {

    return (
        <div>
           id: {post.id}---title:{post.title}--userID:{post.userId}
        </div>
    );
};

export {Post};
import {IPostModel} from "../../models/IPostModel";
import {FC} from "react";

interface IProps{
    posts:IPostModel[]
}
const Posts:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post:IPostModel)=>(<li key={post.id}>userId:{post.userId}<br/>
                   title:{post.title}<br/>body:{post.body} </li>))
            }
        </div>
    );
};

export {Posts};
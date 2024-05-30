import {FC, PropsWithChildren} from "react";
import {IPostModel} from "../../models";
import {Outlet, useNavigate} from "react-router";

interface IProps extends PropsWithChildren {
    post: IPostModel
}
const Post:FC<IProps>= ({post}) => {
    const {id, body,userId,title} = post;
    const navigate = useNavigate();
    return (
        <div>
                <p>postId:{id}</p>
                <p>userId:{userId}</p>
                <p>{title}</p>
                <p>{body}</p>
            <button onClick={()=>{

                navigate(`/users/${userId}/posts/${id}/comments`)
            }}>
                  get info comments
            </button>

        </div>
    );
};

export {Post};
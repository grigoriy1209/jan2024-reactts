import {FC, PropsWithChildren} from "react";
import {IPostModel} from "../../model";


interface IProps extends PropsWithChildren {
    post:IPostModel
}

const Post:FC<IProps> = ({post}) => {
    const {id, userId, title,body} = post;
    return (
        <div>
            <p>id:{id}--userId:{userId}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export {Post};
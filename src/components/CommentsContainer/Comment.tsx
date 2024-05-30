import {FC} from "react";
import {ICommentModel} from "../../models";


interface IProps {
    comment:ICommentModel
}

const Comment:FC<IProps> = ({comment}) => {
    const {id, postId,name,email,body}= comment;
    return (
        <div>
            <p>id:{id}</p>
            <p>postId:{postId}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export {Comment};
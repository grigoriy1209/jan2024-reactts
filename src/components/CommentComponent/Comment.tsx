import {FC, PropsWithChildren} from "react";
import {ICommentModel} from "../../model";


interface IProps extends PropsWithChildren {
    comment: ICommentModel;
}

const Comment:FC<IProps> = ({comment}) => {
    const {id, postId, name, email,body} = comment;
    return (
        <div>
            <p>id:{id}--postId:{postId}--name:{name}</p>
            <p>email:{email}</p>
            <p>{body}</p>
        </div>
    );
};

export {Comment};
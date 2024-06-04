import {FC} from "react";
import {ICommentsModule} from "../../modules";

interface IProps{
    comment:ICommentsModule
}

const Comment:FC<IProps> = ({comment}) => {
    return (
        <div>
          id:{comment.id}---NAME:{comment.name}---PostID:{comment.postId}
        </div>
    );
};

export {Comment};

import {FC} from "react";
import {ICommentModel} from "../../models";
import {Comment} from "./Comment";

interface IProps {
    comments:ICommentModel[]
}
const Comments:FC<IProps> = ({comments}) => {


    return (
        <div>
            {
                comments.map(comment =><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};
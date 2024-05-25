
import {FC} from "react";
import {ICommentModel} from "../../models";

interface IProps {
    comments:ICommentModel[]
}
const Comments:FC<IProps> = ({comments}) => {


    return (
        <div>
            Comments
        </div>
    );
};

export {Comments};
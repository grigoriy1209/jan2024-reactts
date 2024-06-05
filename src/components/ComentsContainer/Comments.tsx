
import {Comment} from "./Comment";
import {useStore} from "../../context/ContextProvider";

const Comments = () => {
    const {commentStore: {allComments}} = useStore();
    return (
        <div>
            {
                allComments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};
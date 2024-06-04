import {useContextProvider} from "../../hooks/useContextProvider";
import {Comment} from "./Comment";

const Comments = () => {
    const {commentStore: {allComments}} = useContextProvider();
    return (
        <div>
            {
                allComments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};
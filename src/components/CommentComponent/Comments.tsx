import React, {FC, useEffect, useState} from "react";
import {ICommentModel} from "../../model";
import {commentService} from "../../services";
import {Comment} from "./Comment";

const Comments:FC = () => {
    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        commentService.getAllComment().then(({data})=>setComments(data))
    }, []);
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};
import {useParams} from "react-router";

import {Comments} from "../components/CommentsContainer";
import {useEffect, useState} from "react";
import {ICommentModel} from "../models";
import {commentService} from "../services";

const CommentsPage = () => {
    const {postId} = useParams();
    console.log(postId)
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if(postId){
            commentService.getCommentsOfPost(postId)
                .then(({data})=>console.log(data))
        }

    }, [postId]);

    return (
        <div>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsPage};
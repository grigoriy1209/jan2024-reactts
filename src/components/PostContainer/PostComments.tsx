import {useContextProvider} from "../../hooks/useContextProvider";
import {useEffect, useMemo, useState} from "react";
import {PostWithCommentType} from "../../types";


const PostComments = () => {
    const {postStore: {allPosts}, commentStore:{allComments}} = useContextProvider();
    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostWithCommentType[]>([])

    const postsWithCommentsArray= useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)};
            });
        }
    }, [allComments, allPosts]);


    useEffect(() => {
       setPostsWithCommentsState(postsWithCommentsArray);
    }, [postsWithCommentsArray]);


    return (
        <div>
            {
                postsWithCommentsState.map(post => <div key={post.id}>
                    <ul>
                        <div>{post.title}</div>
                        {
                            post.comments.map(comment =>
                                <li key={comment.id}> {comment.name} - {comment.body}</li>)
                        }
                    </ul>
               </div>
                )}
        </div>
    );
};


export {PostComments};
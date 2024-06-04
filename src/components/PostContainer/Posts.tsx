import {useContextProvider} from "../../hooks/useContextProvider";
import {Post} from "./Post";

const Posts = () => {
    const {postStore:{allPosts}} = useContextProvider();
    return (
        <div>
            {
                allPosts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export {Posts};
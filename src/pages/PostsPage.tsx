import {useParams} from "react-router";

import {Posts} from "../components/PostsContainer";

const PostsPage = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
           <Posts userId={id}  />

        </div>
    );
};

export {PostsPage};
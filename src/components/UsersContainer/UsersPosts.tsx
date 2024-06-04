import {useContextProvider} from "../../hooks/useContextProvider";
import {useEffect, useMemo, useState} from "react";
import {UserWithPostType} from "../../types";



const UsersPosts = () => {
    const {postStore: {allPosts}, userStore: {allUsers}} = useContextProvider();
    const [usersWithPostsState, setUsersWithPostsState] = useState<UserWithPostType[]>([])

    const userWithPostArray = useMemo(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)};
            });
        }
    }, [allUsers, allPosts]);

    useEffect(() => {
        setUsersWithPostsState(userWithPostArray)
    }, [userWithPostArray]);
    return (
        <div>
            {
                usersWithPostsState.map(user => <div key={user.id}>

                        <ul>
                            <div>{user.name}</div>
                            {
                                user.posts.map(post =>
                                    <li key={post.id}> {post.title} - {post.userId}</li>)
                            }
                        </ul>
                    </div>
                )

            }
        </div>
    );
};

export {UsersPosts};
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {HeaderComponent} from "./components";
import {commentService, postService, usersService} from "./services";
import {Context} from "./context/ContextProvider";
import {ICommentsModule, IPostsModule, IUsersModule} from "./modules";

const App = () => {
    const [users, setUsers] = useState<IUsersModule[]>([])
    const [posts, setPosts] = useState<IPostsModule[]>([])
    const [comments, setComments] = useState<ICommentsModule[]>([])

    useEffect(() => {
        usersService.getAllUsers().then(value => setUsers(value.data))
        postService.getAllPosts().then(value => setPosts(value.data))
        commentService.getAllComments().then(value => setComments(value.data))
    }, []);
    return (
        <div>
            <HeaderComponent/>
            <Context.Provider value={{
                userStore: {
                    allUsers: users,
                },
                postStore: {
                    allPosts: posts,
                },
                commentStore: {
                allComments: comments,
                }
            }}>
                < Outlet/>
                </Context.Provider>
                </div>
                );
            };

export default App;
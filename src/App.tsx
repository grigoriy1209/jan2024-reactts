import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {HeaderComponent} from "./components";
import {useStore} from "./context/ContextProvider";
import {commentService, postService, usersService} from "./services";

const App = () => {
    const {
        userStore, postStore,
        commentStore
    } = useStore();

    useEffect(() => {
        usersService.getAllUsers().then(value =>
            userStore.loadUsers(value.data));
        postService.getAllPosts().then(value =>
            postStore.loadPosts(value.data));
        commentService.getAllComments().then(value =>
            commentStore.loadComments(value.data));

    }, []);
    return (
        <div>
            <HeaderComponent/>
            < Outlet/>

        </div>
    );
};

export default App;
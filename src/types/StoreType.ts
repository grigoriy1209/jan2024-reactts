import {ICommentsModule, IPostsModule, IUsersModule} from "../modules";

export type StoreType = {
    userStore:{
        allUsers:IUsersModule[],
        loadUsers:(users:IUsersModule[]) => void,

        favoriteUser:IUsersModule | null,
        setFavoriteUser:(obj:IUsersModule)=>void
    },
    postStore:{
        allPosts:IPostsModule[],
        loadPosts:(users:IPostsModule[]) => void,
    },
    commentStore:{
        allComments:ICommentsModule[],
        loadComments:(users:ICommentsModule[]) => void,
    }
}
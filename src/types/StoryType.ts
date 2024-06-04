import {ICommentsModule, IPostsModule, IUsersModule} from "../modules";

export type StoryType = {
    userStore:{
        allUsers:IUsersModule[]
    },
    postStore:{
        allPosts:IPostsModule[]
    },
    commentStore:{
        allComments:ICommentsModule[]
    }
}
import {IPostsModule, IUsersModule} from "../modules";

export type UserWithPostType = IUsersModule & {posts:IPostsModule[]}
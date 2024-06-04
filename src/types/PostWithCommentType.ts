import {ICommentsModule, IPostsModule} from "../modules";

export type PostWithCommentType = IPostsModule & {comments:ICommentsModule[]}
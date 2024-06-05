import {create} from "zustand";

import {ICommentsModule, IPostsModule, IUsersModule} from "../modules";
import {StoreType} from "../types";

export const useStore = create<StoreType>()((set) => {
    return {
        userStore: {
            allUsers: [],
            loadUsers: (users: IUsersModule[]) => {
                return set((state: StoreType) => {
                  return{
                      ...state,
                      userStore:{
                          ...state.userStore,
                          allUsers:users
                      }
                  }
                });
            },
            favoriteUser: null,
            setFavoriteUser: (user: IUsersModule) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        userStore:{
                            ...state.userStore,
                            favoriteUser: user
                        }
                    }
                })
            }
        },
        postStore: {
            allPosts: [],
            loadPosts: (posts: IPostsModule[]) => {
                return set((state: StoreType) => {
                    return{
                        ...state,
                        postStore:{
                            ...state.postStore,
                            allPosts:posts
                        }
                    }
                })
            },
        },
        commentStore: {
            allComments: [],
            loadComments: (comments: ICommentsModule[]) => {
                return set((state: StoreType) => {
                    return{
                        ...state,
                        commentStore:{
                            ...state.commentStore,
                            allComments:comments
                        }
                    }
                })
            },
        }
    }
})
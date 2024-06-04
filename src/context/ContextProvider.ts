import {createContext} from "react";
import {StoryType} from "../types/StoryType";

export const defaultValue: StoryType = {
    userStore:{
        allUsers:[]
    },
    postStore:{
        allPosts:[]
    },
    commentStore:{
        allComments:[]
    }
};
export const Context = createContext<StoryType>(defaultValue);
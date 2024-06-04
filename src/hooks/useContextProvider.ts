import {useContext} from "react";

import {StoryType} from "../types/StoryType";
import {Context} from "../context/ContextProvider";

export const useContextProvider=():StoryType =>{
    return useContext(Context)
}
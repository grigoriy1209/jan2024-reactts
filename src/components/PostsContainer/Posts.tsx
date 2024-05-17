import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IPostModel, IUserModel} from "../../models";
import {IRes} from "../../types/responseType";
import {postService} from "../../services";
interface IProps extends PropsWithChildren {
    userId:IPostModel[];
}
const Posts:FC<IProps> = ({userId}) => {
    const [posts, setPosts] = useState<IRes<IPostModel[]>>()



    useEffect(() => {
        if(userId){
            postService.getByUserId(userId).then(({data})=>console.log(data))
        }
    }, [userId]);
    return (
        <div>
            Posts
        </div>
    );
};

export {Posts};
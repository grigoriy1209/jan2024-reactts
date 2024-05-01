import React, {FC} from "react";

import {IUserModel} from "../../models/IUserModel";

interface IProps{
    user:IUserModel
}
type IPropsType = IProps & {children?:React.ReactNode} & {transition?:(id:number) => void;}

const User:FC<IPropsType> = ({user,transition}) => {

    const onclickHandler = ()=>{
        if (transition){
            transition(user.id)
        }
    }


    return (
        <div>
            <div>
                {user.id}.{user.name}{user.userName}
                <p>{user.address.city}; {user.address.street}; {user.address.suite}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <button onClick={onclickHandler}>INFO-POSTS</button>
            </div>


        </div>
    );
};

export {User};
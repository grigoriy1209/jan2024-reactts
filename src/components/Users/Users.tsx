import {FC, useEffect, useState} from "react";

import {getAllUsers} from "../../services/usersService";
import {User} from "./User";
import {IUserModel} from "../../models/IUserModel";

type IPropsType = {transition?:(id:number) => void};

const Users:FC<IPropsType> = ({transition}) => {
    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        getAllUsers().then(({data})=>setUsers(data))

    }, []);
    return (
        <div>
            {
             users && users.map((user) => ( <User key={user.id} user={user} transition={transition}/>))
            }
        </div>
    );
};

export {Users};
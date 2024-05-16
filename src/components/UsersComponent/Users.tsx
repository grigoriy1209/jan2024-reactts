import {FC, useEffect, useState} from "react";

import {IUserModel} from "../../model";
import {userService} from "../../services";
import {User} from "./User";

const Users:FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data))
    })
    return (
        <div>
            {
                users.map(user =><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};